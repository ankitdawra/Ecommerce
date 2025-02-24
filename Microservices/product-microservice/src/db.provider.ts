import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

@Injectable()
export class DatabaseProvider implements OnModuleInit, OnModuleDestroy {
  private mongoClient: MongoClient;
  private db: Db;

  async onModuleInit() {
    console.log('Connecting to Mongo');
    const uri = `mongodb+srv://ankitdawra2025:${process.env.MONGO_PASS}@cluster0.xi7uo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    this.mongoClient = new MongoClient(uri, {
      serverSelectionTimeoutMS: 30000,
    });
    await this.mongoClient.connect();
    console.log('Connected');
    this.db = this.mongoClient.db('ecomm_db');
  }

  async onModuleDestroy() {
    await this.mongoClient.close();
  }

  getCollection<T>(collectionName: string) {
    return this.db
      ?.collection<T>(collectionName)
      ?.find({}, { projection: { _id: 0 } })
      ?.toArray();
  }

  findOne(collectionName: string, query) {
    return this.db
      .collection(collectionName)
      .findOne(query, { projection: { _id: 0 } });
  }

  find(collectionName: string, query) {
    console.log('Query', collectionName, query);
    return this.db
      .collection(collectionName)
      .find(query, { projection: { _id: 0 } });
  }

  insertMany<T>(collectionName: string, documents) {
    return this.db.collection<T>(collectionName).insertMany(documents);
  }
}
