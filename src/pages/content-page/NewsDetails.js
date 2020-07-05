import React,{Component} from 'react';
import { connect } from 'react-redux';
import parse from 'html-react-parser';
import { fetchNewsById } from '../../actions/newsSingleAction';
import SidePageOne from '../../components/side-page-one/side-page-one';
import Loader from '../../components/Loader/Loader';

class NewsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    async componentDidMount(){
        const {id} = this.props;

        await this.props.fetchNewsById(id);
    }
    render() { 
        let images = {}; let image = {}; let image1={}
        const { newsSingleLoading, newsSingle } = this.props;
        if(!newsSingleLoading){
            images = newsSingle.visual_news.filter(y => y.image_type==='size930x620');
        
            image = images[0];
            image1 = images[1];
            if (images.length == 0) {
                image = {
                    id: 0,
                    image_file: '',
                    image_type: 'size930x620',
                    is_main: false,
                    name: 'Petro Price',
                    news: newsSingle.id,
                };
                image1 = {
                    id: 1,
                    image_file: '',
                    image_type: 'size930x620',
                    is_main: false,
                    name: 'Petro Price',
                    news: newsSingle.id,
                };
            }
        }
        
        return ( 
            <div>
                {newsSingleLoading ? <Loader /> : (
                    <section className='bg-white section-xs-type-1'>
                        <div className='shell'>
                            <div className='range range-center range-50'>
                                <div className='cell-md-9 cell-lg-9'>
                                <ul className="breadcrumb-custom-type-1">
                                    <li><a href="/">Home  </a></li>
                                    <li> News </li>
                                    <li> {newsSingle.title} </li> 
                                </ul>
                                <div className="post-content">
                                    <ul className="tag-list">
                                        
                                        {
                                        newsSingle.section && newsSingle.section.map(category => (
                                        <li key={category.section_category.id}>
                                        <a href="/">{category.section_category.section_name}</a>
                                        </li>
                                        ))
                                    }
                                    </ul>
                                    
                                    <h2>{newsSingle.title} </h2>
                                    <ul className="meta-list">
                                        <li>by <a href="/">{newsSingle.author.first_name} {newsSingle.author.first_name}</a></li>
                                        <li><a href="/">{newsSingle.entry_date}</a></li>
                                    </ul>
                                    
                                    <br />
                                    <img src={`${image.image_file}`} alt=""></img>
                                    <br />
                                    
                                    {parse(`${newsSingle.content}`)}
                                    {
                                        image1 ? `<img src=${image1.image_file} alt=""></img>` : ''
                                    }
                                    
                                    
                                    <br/>
                                </div>
                                </div>
                                <div className='cell-md-3'>
                                <SidePageOne />
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>
         );
    }
}
const mapStateToProps = ({newsSingle,}) => ({
    newsSingle: newsSingle.newsSingle,
    newsSingleLoading: newsSingle.newsSingleLoading,
});

export default connect(mapStateToProps, { fetchNewsById})(
    NewsDetails
);