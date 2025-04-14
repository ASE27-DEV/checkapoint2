// src/resolvers/CountryResolver.ts
import { Resolver, Query, Mutation, Arg, InputType, Field } from "type-graphql";
import { Country } from "../entity/Country";

@InputType()
class CountryInput {
	@Field()
	code!: string;
	
	@Field()
	name?: string;

	@Field()
	emoji!: string;
}

@Resolver()
export class CountryResolver {
  @Query(() => [Country])
  async getCountries(): Promise<Country[]> {
    return Country.find();
  }

  @Query(() => Country, { nullable: true })
  async getCountryByCode(@Arg("code") code: string): Promise<Country | null> {
    return Country.findOneBy({ code });
  }

  @Mutation(() => Country)
  async addCountry(
    @Arg("data") data: CountryInput) {
    let country = new Country();
    country = Object.assign(country, data);
    await country.save();
    return country;
  }
}
