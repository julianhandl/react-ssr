import React from 'react';
import ContentPage from '../ContentPage/ContentPage';

export class NotFound extends ContentPage{
    renderContent = () => {
        return(
            <div>
                Die gesuchte Seite existiert nicht.
            </div>
        );
    }
}

export default NotFound;