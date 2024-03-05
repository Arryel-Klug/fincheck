import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoriesRepository } from 'src/shared/database/repositories/categories.repositories';

@Injectable()
export class ValidateCategoryOwnershipService {
  constructor(private readonly categoriesRepo: CategoriesRepository) {}

  async validate(userId: string, categoriesId: string) {
    const isOwner = await this.categoriesRepo.findFirst({
      where: { userId, id: categoriesId },
    });

    if (!isOwner) {
      throw new NotFoundException('Category not found.');
    }
  }
}
