var movies = [
    {
      id: 1,  
      title: 'Harry Potter',
      desc: 'Movie about young wizard',
      year: 'Release date: 1997',  
      genere: 'Genere: Fantasy',
      image: './images/harry.jpg'  
    },
    {
      id: 2,  
      title: 'Lion King',
      desc: 'Movie about king of the Savanna',
      year: 'Release date: 1994',
      genere: 'Genere: Animation',
      image: './images/krol.jpg'
    }
  ];

var movieElements = movies.map(function(movie){
    return React.createElement('li', {key: movie.id}, 
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('p', {}, movie.year),
        React.createElement('p', {}, movie.genere),
        React.createElement('img', {src: movie.image})
        );
}); 

var app = 
    React.createElement('div', {},
        React.createElement('h1', {}, 'Movies List'),
        React.createElement('ul', {}, movieElements)
        );
ReactDOM.render(app, document.getElementById('app'));
