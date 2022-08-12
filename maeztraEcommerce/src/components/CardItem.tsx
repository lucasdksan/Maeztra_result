type cardItemProps = {
    path: string;
    title: string;
    description: string;
}

const CardItem = ({ description, path, title }:cardItemProps)=>{
    return(
        <div className="card-element">
            <img src={path} alt="Icon element Card" />
            <div className="card-description">
                <span className="title">{title}</span>
                <span className="description">{description}</span>
            </div>
        </div>
    );
}

export default CardItem;