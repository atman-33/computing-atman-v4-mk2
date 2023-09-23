import { apiFeatureTestMongoose } from './api-feature-test-mongoose';

describe('apiFeatureTestMongoose', () => {
  it('should work', () => {
    expect(apiFeatureTestMongoose()).toEqual('api-feature-test-mongoose');
  });
});
