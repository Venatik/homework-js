function typeOf(parameter) {
 console.log(typeof parameter);
}

typeOf(null);
typeOf(true);
typeOf(10);
typeOf("Hello G7!");
// Ne sum siguren koe se bara, undefined ili random variabla (vo ovoj slucaj someVariable) koja ne e deklarirana.
typeOf();
typeOf(someVariable);