'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  
    return queryInterface.bulkInsert('Articles', [
      {
        id: 1,
        title: '테스트 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: '테스트 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: '테스트 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        title: '테스트 4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        title: '테스트 5',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        title: '테스트 6',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        title: '테스트 7',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        title: '테스트 8',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        title: '테스트 9',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        title: '테스트 10',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        title: '테스트 11',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        title: '테스트 12',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        title: '테스트 13',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        title: '테스트 14',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        title: '테스트 15',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 16,
        title: '테스트 16',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 17,
        title: '테스트 17',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 18,
        title: '테스트 18',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 19,
        title: '테스트 19',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 20,
        title: '테스트 20',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel magna dui. Nam malesuada, sapien et efficitur volutpat, enim sem ultrices massa, ac bibendum eros ex vestibulum lacus. Integer vehicula congue tellus, sed porttitor augue porttitor sit amet. In faucibus quam sit amet nulla tristique, ac lobortis augue cursus. Nulla pretium, lacus in vulputate laoreet, sapien metus facilisis est, eget interdum nisl diam eget quam. Nullam at rutrum quam. In hac habitasse platea dictumst. Quisque cursus elementum leo, sit amet tempor turpis egestas non.',
        writer: '🏅 테스터 안',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Articles', null, {});

  }
};
