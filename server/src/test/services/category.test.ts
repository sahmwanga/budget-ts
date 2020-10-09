import { CategoryService } from '../../services';
const categoryService = new CategoryService();

import { category } from './dumy-data';

describe('Category test', () => {
  test('should create category', async () => {
    const response = await categoryService.create(category);

    expect(response).toEqual(expect.objectContaining(category));
  });

  test('should return one category', async () => {
    const response = await categoryService.create(category);

    const catg = await categoryService.findOne({ id: response.id });

    expect(catg).toEqual(expect.objectContaining(category));
  });

  test('Should return array of categories', async () => {
    await categoryService.create(category);

    const catMany = await categoryService.findMany();

    expect(catMany).toEqual(
      expect.arrayContaining([expect.objectContaining(category)])
    );
  });

  test('Should delete a category', async () => {
    const response = await categoryService.create(category);
    const deleted = await categoryService.deleteOne({ id: '1' });
    expect(deleted).toBeTruthy();
  });

  test('Should delete many category', async () => {
    const response1 = await categoryService.create(category);
    const response2 = await categoryService.create(category);
    const deleted = await categoryService.deleteMany([
      response1.id,
      response2.id,
    ]);
    expect(deleted).toBeTruthy();
  });
});
