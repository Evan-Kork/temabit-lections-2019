import React from "react";

class Comment extends React.Component {


    render() {

        const { branch, position } = this.props.data;
        let { top, left } = position;
        top = top - 202 + pageYOffset + "px";
        left = left + 52 + "px";

		const img_src = branch.photos ? branch.photos[0] : "";

        return (
			img_src ? (
			<div className="comment"  style={{ top, left}}>
				<img src={img_src} />
			</div>
			) : null
        );
    }
}

export default Comment;

{/* <div style={{
                position: "absolute",
				top,
				left,
				backgroundColor: "white",
				borderColor: "red",
				borderWidth: "1px",
				borderStyle: "solid",
				padding: "10px"
				}}>
                {`branch number: ${number}`}
            </div> */}