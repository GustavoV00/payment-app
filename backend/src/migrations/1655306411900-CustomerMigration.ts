import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CustomerMigration1655306411900 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "customers",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
