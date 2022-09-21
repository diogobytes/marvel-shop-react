import './categories.syles.scss';
const App = () => {

  const categories = [
    {
      id: 1,

      title: 'Action Figures',

    },
    {
      id: 2,

      title: 'Comic Books',

    },
    {
      id: 3,

      title: 'Clothes',

    },
    {
      id: 4,

      title: 'Cosplay',

    },
    {
      id: 5,

      title: 'Others',

    },
  ]
  return (
    <div className="categories-container">
    {categories.map(({title}) => (
      
      <div className="category-container">
        <div className="background-image"/>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>

    ))}

    </div>
  );
}

export default App;
