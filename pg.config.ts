import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";



export const pgConfig:PostgresConnectionOptions ={
    url:"postgresql://neondb_owner:X9xkyRvA8Fes@ep-fancy-meadow-a8o987bc.eastus2.azure.neon.tech/neondb?sslmode=require",
    port:3306,
    type:"postgres",
    entities:[__dirname + '/**/*.entity{.ts,.js}'],
    synchronize:true,
    logging:true
    
}