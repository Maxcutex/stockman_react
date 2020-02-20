import React,{Component, useParams} from 'react';
import { connect } from 'react-redux';
import parse from 'html-react-parser';
import { fetchInsideBusinessById, fetchNewsById } from '../../actions/newsAction';
import SidePageOne from '../../components/side-page-one/side-page-one';

class ContentPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            title: null,
            pageTypeTitle: null,
            content: null,
            image1: null, 
            image2: null,
            section: null, author: null, entryDate: null
        }
        
    }
    
    async componentDidMount() {
        if (this.props.match.params) {
          try {
              const {id, pageType} =this.props.match.params;
              let first_image, second_image = null;
            console.log('inside check');
            console.log(pageType);
            console.log('after page type check');
            console.log(id);
            switch (pageType) {
                case 'News':
                    const newsObj = this.props.generalNews.find( x => x.id == id );
                    if(newsObj.visual_news.length){
                        let image = newsObj.visual_news.filter(y => y.image_type=='size930x620');
                        first_image = image[0];
                        second_image = image[1];
                    }
                    
                    this.setState({...this.state, 
                        title: newsObj.title,
                        pageTypeTitle: 'News', 
                        content: newsObj.content,
                        image1: first_image, 
                        image2: second_image,
                        
                    })
                    break;
                
                case 'insidebusiness':
                    const insideObj = this.props.insideBusiness.results.find( x => {
                       return x.id == id
                    } );
                    
                    if(insideObj.visual_inside_business.length){
                        let image = insideObj.visual_inside_business.filter(y => y.image_type=='size930x620');
                        first_image = image[0];
                        second_image = image[1];
                    }
                     
                    this.setState({...this.state, 
                        title: insideObj.title,
                        pageTypeTitle: 'Inside Business', 
                        content: insideObj.content,
                        image1: first_image.image_file, 
                        image2: second_image.image_file,
                        section: insideObj.category_inside_business, 
                        author: insideObj.author.first_name, 
                        entryDate: insideObj.entry_date
                    })
                    break;
                case 'Opinions':
                    break;
                default:
                    break;
            }
            // const movies = await movieAPI.getMoviesByGenre(
            //   this.props.match.params.genreId,
            // );
            // this.setState({ movies, loading: false });
          } catch (err) {
            // this.setState({ loading: false, error: true });
          }
        }
      }

    render() { 
        return ( <div>
            <section className='bg-white section-xs-type-1'>
                <div className='shell'>
                    <div className='range range-center range-50'>
                        <div className='cell-md-9 cell-lg-9'>
                          <ul className="breadcrumb-custom-type-1">
                            <li><a href="/">Home  </a></li>
                            <li> {this.state.pageTypeTitle} </li>
                            <li> {this.state.title} </li>
                            
                          </ul>
                          <div className="post-content">
                            <ul class="tag-list">
                                
                                {
                                this.state.section && this.state.section.map(category => (
                                <li key={category.section_category.id}>
                                <a href="/">{category.section_category.section_name}</a>
                                </li>
                                ))
                            }
                            </ul>
                            
                            <h2>{this.state.title} </h2>
                            <ul class="meta-list">
                                <li>by <a href="/">{this.state.author}</a></li>
                                <li><a href="/">{this.state.entryDate}</a></li>
                            </ul>
                            
                            <br />
                            <img src={`${this.state.image1}`} alt=""></img>
                            <br />
                            {parse(`${this.state.content}`)}
                            
                            
                            
                            <br/>
                          </div>
                        </div>
                        <div className='cell-md-3'>
                          <SidePageOne />
                        </div>
                    </div>
                </div>
                
            </section>
        
        </div> );
        
    }
}

ContentPage.propTypes = {

};

const mapStateToProps = ({ news,}) => ({
    generalNews: news.generalNews,
    worldNews: news.worldNews,
    insideBusiness: news.insideBusiness,
});

export default connect(mapStateToProps, null)(
    ContentPage
);