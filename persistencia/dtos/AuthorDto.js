export default class AuthorDto {
	constructor({ email, nombre, apellido, edad, alias, avatar }) {
		this.email = email;
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.alias = alias;
		this.avatar = avatar;
	}
}
