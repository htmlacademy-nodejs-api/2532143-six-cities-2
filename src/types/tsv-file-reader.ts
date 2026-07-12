import { readFileSync } from 'node:fs';
import { Offer, OfferType } from './offer.js';
import { randomUUID } from 'node:crypto';

export class TSVFileReader {
  private rawData = '';

  constructor(private readonly filePath: string) {}

  public read(): void {
    this.rawData = readFileSync(this.filePath, { encoding: 'utf-8' });
  }

  public toObject(): Offer[] {
    return this.rawData
      .trim()
      .split('\n')
      .map((line) => this.parseOffer(line));
  }

  private parseOffer(line: string): Offer {
    const [
      title,
      description,
      publicationDate,
      cityName,
      previewImage,
      imagesRaw,
      isPremiumRaw,
      isFavoriteRaw,
      ratingRaw,
      typeRaw,
      bedroomsRaw,
      maxAdultsRaw,
      priceRaw,
      goodsRaw,
      hostRaw,
      locationRaw,
    ] = line.split('\t');

    const location = JSON.parse(locationRaw);

    return {
      id: randomUUID(),
      title,
      description,
      publicationDate,
      city: {
        name: cityName,
        location,
      },
      previewImage,
      images: imagesRaw.split(','),
      isPremium: isPremiumRaw === 'true',
      isFavorite: isFavoriteRaw === 'true',
      rating: Number.parseInt(ratingRaw, 10),
      type: typeRaw as OfferType,
      bedrooms: Number.parseInt(bedroomsRaw, 10),
      maxAdults: Number.parseInt(maxAdultsRaw, 10),
      price: Number.parseInt(priceRaw, 10),
      goods: goodsRaw.split(','),
      host: JSON.parse(hostRaw),
      location,
    };
  }
}