exports.seed = function (knex, Promise) {
  return knex('profiles').del()
    .then(function () {
      return Promise.all([

knex('profiles').insert({id: 1, name: 'Ambitious Aardvark',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 2, name: 'Bamboozled Baboon',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 3, name: 'Curious Capybara',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 4, name: 'Dilapidated Duck',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 5, name: 'Exuberant Elephant',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 6, name: 'Fascinated Flying Fox',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 7, name: 'Generous Gila Monster',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 8, name: 'Hilarious Heron',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 9, name: 'Intransigent Impala',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 10, name: 'Jocular Jerboa',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 11, name: 'Kafkaesque Kinkajou',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 12, name: 'Loquacious Lemur',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 13, name: 'Misanthropic Mongoose',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 14, name: 'Nonchalant Nyala',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 15, name: 'Ornery Ocelot',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 16, name: 'Peaceful Pangolin',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 17, name: 'Querulous Quokka',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 18, name: 'Resolute Rail',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 19, name: 'Senescent Sloth',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 20, name: 'Tumultuous Terrapin',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 21, name: 'Unassailable Urial',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 22, name: 'Voracious Viscacha',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 23, name: 'Wondering Wombat',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 24, name: 'Xenial Xerus',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 25, name: 'Yielding Yak',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'}),
knex('profiles').insert({id: 26, name: 'Zaftig Zebu',age: 23, image: 'https://images.pexels.com/photos/495202/pexels-photo-495202.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb'})
    ]);
    });
};
