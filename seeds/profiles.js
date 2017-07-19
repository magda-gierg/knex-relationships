exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([
        knex('profiles').insert({id: 99901, age: 26, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99902, age: 15, image:'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
        knex('profiles').insert({id: 99903, age: 12, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99904, age: 32, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99905, age: 23, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99906, age: 23, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99907, age: 23, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99908, age: 23, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99909, age: 23, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99910, age: 23, image:'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99911, age: 23, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99912, age: 23, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99913, age: 23, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99914, age: 23, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99915, age: 23, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99916, age: 23, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99917, age: 21, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99918, age: 21, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99919, age: 21, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99920, age: 21, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99921, age: 21, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99922, age: 43, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99923, age: 23, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99924, age: 23, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99925, age: 23, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'}),
        knex('profiles').insert({id: 99926, age: 23, image: 'https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg'})
      ]);
    });
};
