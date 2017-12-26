const account = {
  name: 'Fletcher Jones',
  email: 'user1@gmail.com',
  site: 'https://www.mboffremont.com',
  facebook: 'https://www.facebook.com/mbfremont',
  youtube: 'https://www.youtube.com/channel/UCaNl72Z-gF-I8ivfHvQzRYQ',
  instagram: 'https://www.instagram.com/mbfremont/',
  pinterest: 'https://www.pinterest.com/fremontmercedes/',
  twitter: 'https://twitter.com/mbfremont',
  similarWeb: 'https://www.similarweb.com/website/mboffremont.com',
  yelp:
    'https://www.yelp.com/biz/fletcher-jones-motorcars-of-fremont-fremont?osq=mercedes',
  bbb:
    'https://www.bbb.org/greater-san-francisco/business-reviews/new-car-dealers/fletcher-jones-motorcars-of-fremont-in-fremont-ca-119389'
}

const facebook = {
  facebook: 1,
  stars: 4.4,
  reviews: 123,
  likes: 6402,
  followers: 6375
}

const instagram = {
  instagram: 1,
  posts: 408,
  followers: 3134,
  following: 516
}

const youtube = {
  youtube: 1,
  subscribers: 98,
  totalChannelViews: 13118,
  sticky: {
    joinedDate: 'Aug 12, 2015'
  }

}

const twitter = {
  twitter: 1,
  tweets: 1559,
  following: 155,
  followers: 167,
  likes: 71
}

const pinterest = {
  pinterest: 1,
  followers: 1012,
  following: 13
}

const googleSiteSearch = {
  googleSiteSearch: 1,
  results: 2050
}

const googleTrends = {
  googleTrends: 1,
  keyword: 'mercedes benz of fremont',
  interestOverTime: 34
}

const yelp = {
  stars: 4.4,
  reviews: 123,
  likes: 6402,
  followers: 6375
}

const similarweb = {
  globalRank: 3155210,
  countryRank: 801113,
  categoryRank: 14591,
  sticky: {
    overview: 'fletcher jones motorcars of fremont is proud to provide california drivers with quality luxury cars. we have vehicles for every taste and need! visit today!',
    estimatedEmployees: '10 - 50',
    estimatedRevenue: '$1M - $10M',
    headquarters: 'Fremont, CA, United States',
    category: 'Autos and Vehicles > Car Buying'
  }
}

const bbb = {
  sticky: {
    rating: 'A+',
    complaints: '2 complaints closed with BBB in last 3 years | 0 closed in last 12 months',
    accreditStatus: 'THIS BUSINESS IS NOT BBB ACCREDITED',
    yearsInBusiness: '12 years in business',
    additionalEmailAddresses: [
      'michael.schultz@motorcarsoffremont.com',
      'dbiasatti@fjfremont.com'
    ],
    bbbFileOpened: '09/22/2006',
    businessStarted: '10/28/2005',
    businessStartedLocally: '10/28/2005',
    businessIncorporated: '10/06/2005 in CA',
    typeOfEntity: 'Corporation',
    businessManagement: [
      'Mr. Dave Biasatti, Manager',
      'Mr. Fletcher Jones, Owner'
    ],
    businessCategory: 'New Car Dealers',
    alternateBusinessNames: ['Fremont Automotive Aquistion, Inc.'],
    licensingBondingRegistration:
    'This business is in an industry that may require professional licensing, bonding or registration. BBB encourages you to check with the appropriate agency to be certain any requirements are currently being met.',
    numberOfEmployees: 110
  }
}

const seedData = {
  account,
  instagram,
  facebook,
  youtube,
  twitter,
  pinterest,
  googleSiteSearch,
  googleTrends,
  yelp,
  similarweb,
  bbb
}

module.exports = seedData
