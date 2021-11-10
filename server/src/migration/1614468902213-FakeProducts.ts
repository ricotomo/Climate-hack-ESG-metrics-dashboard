/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */
import { MigrationInterface, QueryRunner } from "typeorm";

export class FakeProducts1614468902213 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        insert into company(id, name) VALUES(1, "Coffee Company");
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (1, 'Wine - Blue Nun Qualitatswein', 1, 551, 1491, 5663, 2370, 0.62, 0.4, 0.8, 123, 0.56, 0.42, 0.35);
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (2, 'Spice - Peppercorn Melange', 1, 747, 2212, 6700, 1956, 0.8, 0.54, 0.27, 33, 0.72, 0.26, 0.76);
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (3, 'Lobster - Tail, 3 - 4 Oz', 1, 204, 1088, 7656, 1444, 0.95, 0.01, 0.42, 162, 0.82, 0.76, 0.8);
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (4, 'Wine - Ej Gallo Sierra Valley', 1, 384, 1038, 7534, 374, 0.02, 0.98, 0.72, 284, 0.33, 0.7, 0.24);
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (5, 'Wine - Harrow Estates, Vidal', 1, 365, 4224, 6693, 2150, 0.56, 0.75, 0.58, 8, 0.02, 0.88, 0.96);
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (6, 'Sauce Tomato Pouch', 1, 697, 1860, 7296, 2961, 0.63, 0.08, 0.97, 260, 0.59, 0.33, 0.52);
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (7, 'Tomatoes - Vine Ripe, Yellow', 1, 123, 3982, 7706, 63, 0.84, 0.08, 0.47, 8, 0.42, 0.08, 0.3);
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (8, 'Yeast Dry - Fleischman', 1, 154, 1119, 9665, 1769, 0.25, 0.22, 0.08, 4, 0.8, 0.49, 0.41);
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (9, 'Towel Dispenser', 1, 505, 2476, 9624, 2073, 0.3, 0.27, 0.18, 252, 0.22, 0.92, 0.68);
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (10, 'Milk - 2% 250 Ml', 1, 403, 1691, 5232, 858, 0.97, 0.39, 0.55, 212, 0.57, 0.49, 0.02);
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (11, 'Clam - Cherrystone', 1, 898, 1561, 9077, 1311, 0.85, 0.84, 0.29, 299, 0.21, 0.15, 0.89);
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (12, 'Tomato Paste', 1, 181, 4001, 6958, 2569, 0.44, 0.95, 0.26, 166, 0.74, 0.58, 0.19);
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (13, 'Mix Pina Colada', 1, 980, 3213, 8114, 1228, 0.58, 0.07, 0.96, 145, 0.13, 0.14, 0.97);
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (14, 'Yokaline', 1, 381, 1050, 5455, 2260, 0.35, 0.94, 0.72, 147, 0.32, 0.93, 0.14);
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (15, 'Pastry - Apple Large', 1, 829, 4016, 8936, 1852, 0.77, 0.71, 0.31, 86, 0.5, 0.08, 0.21);
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (16, 'Cod - Fillets', 1, 714, 1518, 8349, 2364, 0.04, 0.86, 0.02, 167, 0.09, 0.48, 0.66);
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (17, 'Chips - Doritos', 1, 176, 1708, 7813, 2243, 0.77, 0.71, 0.95, 152, 0.47, 0.55, 0.93);
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (18, 'Beef - Ox Tongue', 1, 175, 4170, 8339, 2671, 0.5, 0.62, 0.73, 146, 0.86, 0.55, 0.87);
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (19, 'Vinegar - White Wine', 1, 502, 4854, 6625, 2427, 0.18, 0.38, 0.06, 252, 0.26, 0.87, 0.38);
        insert into product (id, name, companyId, "ghgScopeOne", "ghgScopeTwo", "ghgScopeThree", "carbonFootprint", "ghgIntensity", "exposureToF", "shareNonRen", "energyConsumption", "negBiodiversity", "emToWater", "hazardousWaste") values (20, 'Cheese - Stilton', 1, 151, 4254, 6210, 403, 0.07, 0.26, 0.09, 140, 0.51, 0.78, 0.09);

            `,
    );
  }

  public async down(_queryRunner: QueryRunner): Promise<void> {}
}
