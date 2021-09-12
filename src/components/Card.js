import React from 'react';

const Card = ({name,email,id}) => {
	return(
         <div className="tc bg-light-green dib br3 pa3 grow ma2 bw2 shadow-5">
	         <img src={`https://robohash.org/${id}?200×200`} alt="robots" />
		         <div>
			         <h1>{name}</h1>
			         <p>{email}</p>
		         </div>
         </div>
		);
}
export default Card;