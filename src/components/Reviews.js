import React from 'react';

const sampleReviews = [
    {
        name: "John Doe",
        rating: 4,
        review: "This webapp has a great selection of movies and is very user-friendly."
    },
    {
        name: "Jane Doe",
        rating: 5,
        review: "I love using this webapp to rent movies. The interface is so easy to use!"
    },
    {
        name: "Bob Smith",
        rating: 3,
        review: "The movie selection could be better, but overall a decent webapp."
    }
];

export function Reviews() {
    return (
        <div className="reviewContainer">
            <h2 className="reviewTitle">Reviews</h2>
            <div className="reviews">
                {sampleReviews.map(review => (
                    <div className="review">
                        <h3 className="reviewName">{review.name}</h3>
                        <p className="reviewRating">Rating: {review.rating}</p>
                        <p className="reviewText">{review.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}