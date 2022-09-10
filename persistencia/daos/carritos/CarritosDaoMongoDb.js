import ContenedorMongo from '../../contenedor/ContenedorMongo.js';
import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
	id: { type: String, required: true },
	name: { type: String, required: true },
	description: { type: String, required: true },
	image: { type: String, required: true },
	price: { type: Number, required: true },
});

const productosSchema = new mongoose.Schema({
	prod: { type: productoSchema, required: true },
	cant: { type: Number, required: true },
});

class CarritoDaoMongoDb extends ContenedorMongo {
	constructor() {
		super('carritos', {
			id: { type: String, required: true },
			prods: {
				type: [productosSchema],
				default: undefined,
				required: [true, 'Must have it'],
			},
		});
	}
}

export default CarritoDaoMongoDb;
