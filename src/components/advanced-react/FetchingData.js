import React from 'react';
import withLoading from './hoc/withLoading';

const FetchingData = ({data}) => {
    return (
        <div>
            {data.map((item)=>(
                <div key={item}>{item.author}</div>
            ))}
        </div>
    );
};

export default withLoading(FetchingData, "https://hn.algolia.com/api/v1/search?query=react");