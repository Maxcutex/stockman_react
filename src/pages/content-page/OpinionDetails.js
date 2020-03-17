import React,{Component} from 'react';
import { connect } from 'react-redux';
import parse from 'html-react-parser';
import { fetchOpinionById } from '../../actions/newsSingleAction';
import SidePageOne from '../../components/side-page-one/side-page-one';
import Loader from '../../components/Loader/Loader';

class OpinionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    async componentDidMount(){
        const {id} = this.props;
        console.log('entered onmountingn')
        await this.props.fetchOpinionById(id);
    }
    render() { 
        let images = {};
        const { opinionSingleLoading, opinionSingle } = this.props;
        if(!opinionSingleLoading){
         images = opinionSingle.visual_analysis.filter(y => y.image_type==='size930x620');
        }
        
        return ( 
            <div>
                {opinionSingleLoading ? <Loader /> : (
                    <section className='bg-white section-xs-type-1'>
                        <div className='shell'>
                            <div className='range range-center range-50'>
                                <div className='cell-md-9 cell-lg-9'>
                                <ul className="breadcrumb-custom-type-1">
                                    <li><a href="/">Home  </a></li>
                                    <li> Opinion  </li>
                                    <li> {opinionSingle.title} </li> 
                                </ul>
                                <div className="post-content">
                                    <ul className="tag-list">
                                        
                                        {
                                        opinionSingle.section && opinionSingle.section.map(category => (
                                        <li key={category.section_category.id}>
                                        <a href="/">{category.section_category.section_name}</a>
                                        </li>
                                        ))
                                    }
                                    </ul>
                                    
                                    <h2>{opinionSingle.title} </h2>
                                    <ul className="meta-list">
                                        <li>by <a href="/">{opinionSingle.author.first_name} {opinionSingle.author.first_name}</a></li>
                                        <li><a href="/">{opinionSingle.entry_date}</a></li>
                                    </ul>
                                    
                                    <br />
                                    <img src={`${images[0].image_file}`} alt=""></img>
                                    <br />
                                    
                                    {parse(`${opinionSingle.content}`)}
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
            </div>
         );
    }
}
const mapStateToProps = ({newsSingle,}) => ({
    opinionSingle: newsSingle.opinionSingle,
    opinionSingleLoading: newsSingle.opinionSingleLoading,
});

export default connect(mapStateToProps, { fetchOpinionById})(
    OpinionDetails
);