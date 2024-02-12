import { Model, DataTypes } from 'sequelize';
import connection from '../sequelize'; 

interface ProductAttributes {
  id?: number;
  name: string;
  price: number;
  quantity: number;
  updatedAt?: Date;
  deletedAt?: Date;
  createdAt?: Date;
}


class Product extends Model<ProductAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public price!: number;
  public quantity!: number;
  public readonly updatedAt!: Date;
  public readonly createdAt!: Date;
}

Product.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.NUMBER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(10, 2),
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: connection,
    modelName: 'Product',
  }
);

export default Product;
