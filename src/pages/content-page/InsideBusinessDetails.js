import React,{Component} from 'react';
import { connect } from 'react-redux';
import parse from 'html-react-parser';
import { fetchInsideBusinessById } from '../../actions/newsSingleAction';
import SidePageOne from '../../components/side-page-one/side-page-one';
import Loader from '../../components/Loader/Loader';

class InsideBusinessDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    async componentDidMount(){
        const {id} = this.props;
        console.log('about to fecth')
        await this.props.fetchInsideBusinessById(id);
        console.log('fetcjon')
    }
    render() { 
        let images = {};
        const { insideBusinessSingleLoading, insideBusinessSingle } = this.props;
        if(!insideBusinessSingleLoading){
            console.log('insideBusinessSingle',insideBusinessSingle)
         images = insideBusinessSingle.visual_inside_business.filter(y => y.image_type==='size930x620');
        }
        return ( <div>
             {insideBusinessSingleLoading ? <Loader /> : (
                    <section className='bg-white section-xs-type-1'>
                        <div className='shell'>
                            <div className='range range-center range-50'>
                                <div className='cell-md-9 cell-lg-9'>
                                <ul className="breadcrumb-custom-type-1">
                                    <li><a href="/">Home  </a></li>
                                    <li> Inside Business </li>
                                    <li> {insideBusinessSingle.title} </li> 
                                </ul>
                                <div className="post-content">
                                    <ul className="tag-list">
                                        
                                        {
                                        insideBusinessSingle.section && insideBusinessSingle.section.map(category => (
                                        <li key={category.section_category.id}>
                                        <a href="/">{category.section_category.section_name}</a>
                                        </li>
                                        ))
                                    }
                                    </ul>
                                    
                                    <h2>{insideBusinessSingle.title} </h2>
                                    <ul className="meta-list">
                                        <li>by <a href="/">{insideBusinessSingle.author.first_name} {insideBusinessSingle.author.first_name}</a></li>
                                        <li><a href="/">{insideBusinessSingle.entry_date}</a></li>
                                    </ul>
                                    
                                    <br />
                                    <img src={`${images[0].image_file}`} alt=""></img>
                                    <br />
                                    
                                    {parse(`${insideBusinessSingle.content}`)}
                                    {
                                        images[1] ? `<img src=${images[1].image_file} alt=""></img>` : ''
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
        </div> );
    }
}
 
const mapStateToProps = ({newsSingle,}) => ({
    insideBusinessSingle: newsSingle.insideBusinessSingle,
    insideBusinessSingleLoading: newsSingle.insideBusinessSingleLoading,
});

export default connect(mapStateToProps, { fetchInsideBusinessById})(
    InsideBusinessDetails
);