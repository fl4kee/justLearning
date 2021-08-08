enum Membership{
    Simple,
    Standard, 
    Premium
}

const membership = Membership.Standard // выдает 1 - индекс enum
const membershipReverse = Membership[2] // Выдаст Premium

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM // Выдаст строчку инстаграмм