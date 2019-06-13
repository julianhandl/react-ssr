import React from 'react';
import {Helmet} from "react-helmet";
import './ContentPageStyles.scss';

interface IContentPageProps {
    name: string;
    contentTitle: string;
    metaTitle: string;
    metaDescription: string;
}

export class ContentPage extends React.Component<IContentPageProps, {}>{
    renderContent = () => {
        return <p>This is a placeholder</p>
    }
    render(){
        return[
            <Helmet key={`helmet-key-${this.props.name}`}>
                <title>{this.props.metaTitle}</title>
                <meta name="description" content={this.props.metaDescription} />
            </Helmet>,
            <div className="container" key={`page-${this.props.name}-key`}>
                <section className={`page content-page page--${this.props.name}`} >
                    <h1 className="content-page__title">{this.props.contentTitle}</h1>
                    <div className="content-page__text">
                        {this.renderContent()}
                    </div>
                </section>
            </div>
        ];
    }
}

export default ContentPage;

/*
export default connect(({home:{data}})=>({
    data: data
}),{
    fetchInit
})(Home);
*/