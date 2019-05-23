import React from 'react';

const FoodBox = ({ name, calories, image, quantity }) => (
	<div className="box">
		<article className="media">
			<div className="media-left">
				<figure className="image is-64x64">
					<img src={image} alt="img"/>
				</figure>
			</div>
			<div className="media-content">
				<div className="content">
					<p>
						<strong>{name}</strong> <br />
						<small>{calories} cal</small>
					</p>
				</div>
			</div>
			<div className="media-right">
				<div className="field has-addons">
					<div className="control">
						<input type="number" className="input" defaultValue={quantity} min="0" max="50" />
					</div>
					<div className="control">
						<button className="button is-info">+</button>
					</div>
				</div>
			</div>
		</article>
	</div>
);

export default FoodBox;