import CategoryItem from "../category-item/category-item.component";
import './directory.syles.scss';
const Directory = ({categories}) => {
    return (
    <div className="categories-container">
        {categories.map(({title,id,imageUrl}) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl}/>
    ))}
    </div>
    )
}

export default Directory;