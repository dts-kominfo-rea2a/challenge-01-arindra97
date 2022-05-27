// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};
const secondUser = {};

// create favoriteColor firstUser without duplicate values 
const firstFavoriteColor = ["Yellow", "Pink", "White", "Purple"];

// create favoriteColor secondUser without duplicate values 
const secondFavoriteColor = ["Blue", "Black", "Grey"];

// create favoriteRestaurant firstUser without duplicate values 
const firstFavoriteRestaurant = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"];

// create favoriteRestaurant secondUser without duplicate values 
const secondFavoriteRestaurant = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"];

// define educationUser
const firstUserEducation = [];
const secondUserEducation = [];

// define firstEducationUser from Elementary School - Senior High School
const firstElementarySchool = {};
firstElementarySchool.name = "SD 01";
firstElementarySchool.city = "Jakarta";
firstElementarySchool.graduate = 2016;
const firstJuniorHighSchool = {};
firstJuniorHighSchool.name = "SMP 02";
firstJuniorHighSchool.city = "Jakarta";
firstJuniorHighSchool.graduate = 2019;
const firstSeniorHighSchool = { "name": "SMA 03", "city": "Tangerang" };

// define secondEducationUser from Elementary School - University
const secondElementarySchool = {};
secondElementarySchool.name = "SD 02";
secondElementarySchool.city = "Jakarta";
secondElementarySchool.graduate = 2010;
const secondJuniorHighSchool = {};
secondJuniorHighSchool.name = "SMP 03";
secondJuniorHighSchool.city = "Bogor";
secondJuniorHighSchool.graduate = 2013;
const secondSeniorHighSchool = {};
secondSeniorHighSchool.name = "SMA 01";
secondSeniorHighSchool.city = "Surabaya";
secondSeniorHighSchool.graduate = 2016;
const secondUniversity = { "name": "Universitas Maju", "city": "Tangerang" };

// Update Value from firstUserEducation & secondUserEducation
firstUserEducation.push(firstElementarySchool, firstJuniorHighSchool, firstSeniorHighSchool);
secondUserEducation.push(secondElementarySchool, secondJuniorHighSchool, secondSeniorHighSchool, secondUniversity);

// Update Value from firstUser
firstUser.name = "Monica";
firstUser.gender = "Female";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com";
firstUser.favoriteColor = [...new Set(firstFavoriteColor)];
firstUser.isHavePet = "Yes";
firstUser.education = firstUserEducation;
firstUser.favoriteRestaurant = [...new Set(firstFavoriteRestaurant)];

// Update Value from secondUser
secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";
secondUser.favoriteColor = [...new Set(secondFavoriteColor)];
secondUser.isHavePet = "Yes";
secondUser.education = secondUserEducation;
secondUser.favoriteRestaurant = [...new Set(secondFavoriteRestaurant)];

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];

users.push(firstUser);
users.push(secondUser);
// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};