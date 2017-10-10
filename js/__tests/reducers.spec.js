// @flow
import reducers from '../reducers';

test('SET_SEARCH_TERM', () => {
  let state;
  state = reducers(
    {
      searchTerm: '',
      searchData: { data: [] },
      searchStatus: { loaded: false, error: false, errorMsg: '' },
      itemData: { text: '', username: '' }
    },
    { type: 'SET_SEARCH_TERM', payload: 'dhoni' }
  );
  expect(state).toEqual({
    searchTerm: 'dhoni',
    searchData: { data: [] },
    searchStatus: { loaded: false, error: false, errorMsg: '' },
    itemData: { text: '', username: '' }
  });
});

test('ADD_SEARCH_STATUS', () => {
  let state;
  state = reducers(
    {
      searchTerm: 'dhoni',
      searchData: {
        data: [
          {
            created_at: 'Sun Oct 08 13:29:09 +0000 2017',
            id: 917019033584787500,
            id_str: '917019033584787456',
            text: "CUTE | Virat Kohli having fun with MS Dhoni's daughter Ziva | Must Watch | Virat Fans.: https://t.co/E11Ex214lc via @YouTube",
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [
                { screen_name: 'YouTube', name: 'YouTube', id: 10228272, id_str: '10228272', indices: [116, 124] }
              ],
              urls: [
                {
                  url: 'https://t.co/E11Ex214lc',
                  expanded_url: 'http://youtu.be/mtflMTy9r7E?a',
                  display_url: 'youtu.be/mtflMTy9r7E?a',
                  indices: [88, 111]
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://www.google.com/" rel="nofollow">Google</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 711870517,
              id_str: '711870517',
              name: 'Rockstar',
              screen_name: 'shivamrocks02',
              location: 'India',
              description: 'Just living my dreams.',
              url: null,
              entities: { description: { urls: [] } },
              protected: false,
              followers_count: 4750,
              friends_count: 490,
              listed_count: 30,
              created_at: 'Mon Jul 23 05:41:19 +0000 2012',
              favourites_count: 24671,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: false,
              verified: false,
              statuses_count: 49357,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme9/bg.gif',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme9/bg.gif',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/790939117039214592/IcLtgmBx_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/790939117039214592/IcLtgmBx_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/711870517/1436525719',
              profile_link_color: '1B95E0',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 0,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:28:47 +0000 2017',
            id: 917018941968539600,
            id_str: '917018941968539648',
            text: 'How Sourav Ganguly played his part in making of the legend of MS Dhoni https://t.co/qVbpmHaM4A',
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [],
              urls: [
                {
                  url: 'https://t.co/qVbpmHaM4A',
                  expanded_url: 'http://ift.tt/2kvt1XM',
                  display_url: 'ift.tt/2kvt1XM',
                  indices: [71, 94]
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="https://ifttt.com" rel="nofollow">IFTTT</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 178544713,
              id_str: '178544713',
              name: 'NewsStory',
              screen_name: 'NewsStoryIndia',
              location: 'India',
              description: 'Follow us now to get news from more than 100 news channels.No copyright Direct references to news content. Follow Now.\nProudly Made in India.जय हिन्द !! जय भारत',
              url: 'https://t.co/Wtiy0ExqsI',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/Wtiy0ExqsI',
                      expanded_url: 'http://newsstory.webnode.com',
                      display_url: 'newsstory.webnode.com',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 4601,
              friends_count: 28,
              listed_count: 27,
              created_at: 'Sun Aug 15 01:58:36 +0000 2010',
              favourites_count: 789,
              utc_offset: -25200,
              time_zone: 'Pacific Time (US & Canada)',
              geo_enabled: false,
              verified: false,
              statuses_count: 114332,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme9/bg.gif',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme9/bg.gif',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/829323773769818113/0Z6sbzum_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/829323773769818113/0Z6sbzum_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/178544713/1475310281',
              profile_link_color: '3B94D9',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 0,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:28:25 +0000 2017',
            id: 917018846690648000,
            id_str: '917018846690648064',
            text: 'RT @DHONIism: VVS Laxman - "Not only in Ranchi or in India, Dhoni will get the loudest cheer in overseas also &amp; he is an absolute Legend of…',
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [
                { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
              ],
              urls: []
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 833203035690192900,
              id_str: '833203035690192896',
              name: 'THE SALMAN KHAN 🔛🔝',
              screen_name: 'SalmanKaStarDom',
              location: 'Under Construction',
              description: "👉 #TIGER  🙏\nSalman Khan's FAN  @BeingSalmanKhan  #Tiger_Zinda_Hai on 22nd Dec 2017. Following Only Salman Khan's Fans",
              url: 'https://t.co/5JUl38Jryy',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/5JUl38Jryy',
                      expanded_url: 'http://SaraJagGhoomeyaLekinInkeJaisaNaKoi.com',
                      display_url: 'SaraJagGhoomeyaLekinInkeJaisaNaKoi.com',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 498,
              friends_count: 203,
              listed_count: 0,
              created_at: 'Sun Feb 19 06:34:18 +0000 2017',
              favourites_count: 8144,
              utc_offset: null,
              time_zone: null,
              geo_enabled: false,
              verified: false,
              statuses_count: 5880,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'F5F8FA',
              profile_background_image_url: null,
              profile_background_image_url_https: null,
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/912237357692215296/TTCvH5V4_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/912237357692215296/TTCvH5V4_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/833203035690192896/1506143031',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sat Oct 07 16:53:40 +0000 2017',
              id: 916708115302686700,
              id_str: '916708115302686720',
              text: 'VVS Laxman - "Not only in Ranchi or in India, Dhoni will get the loudest cheer in overseas also &amp; he is an absolute Legend of the game"',
              truncated: false,
              entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 1727522635,
                id_str: '1727522635',
                name: 'DHONIsm ♥',
                screen_name: 'DHONIism',
                location: 'from Tamil Nadu to World :)',
                description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                url: 'https://t.co/VSrp5PXoY5',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/VSrp5PXoY5',
                        expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                        display_url: 'facebook.com/BleedDhonIsm',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: { urls: [] }
                },
                protected: false,
                followers_count: 133889,
                friends_count: 23,
                listed_count: 32,
                created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                favourites_count: 743,
                utc_offset: 19800,
                time_zone: 'New Delhi',
                geo_enabled: true,
                verified: false,
                statuses_count: 7310,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: 'C0DEED',
                profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                profile_background_tile: true,
                profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                profile_link_color: '0084B4',
                profile_sidebar_border_color: 'FFFFFF',
                profile_sidebar_fill_color: 'DDEEF6',
                profile_text_color: '333333',
                profile_use_background_image: true,
                has_extended_profile: true,
                default_profile: false,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 217,
              favorite_count: 562,
              favorited: false,
              retweeted: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 217,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:28:23 +0000 2017',
            id: 917018841133195300,
            id_str: '917018841133195265',
            text: 'RT @msdfansofficial: His Smile is reason for billions Smile😇\n#Dhoni #INDvAUS https://t.co/vBVso0kX3V',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Dhoni', indices: [61, 67] }, { text: 'INDvAUS', indices: [68, 76] }],
              symbols: [],
              user_mentions: [
                {
                  screen_name: 'msdfansofficial',
                  name: 'MS Dhoni Fans #Dhoni',
                  id: 2962738476,
                  id_str: '2962738476',
                  indices: [3, 19]
                }
              ],
              urls: [],
              media: [
                {
                  id: 916886912534667300,
                  id_str: '916886912534667265',
                  indices: [77, 100],
                  media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  url: 'https://t.co/vBVso0kX3V',
                  display_url: 'pic.twitter.com/vBVso0kX3V',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  },
                  source_status_id: 916886937209675800,
                  source_status_id_str: '916886937209675776',
                  source_user_id: 2962738476,
                  source_user_id_str: '2962738476'
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916886912534667300,
                  id_str: '916886912534667265',
                  indices: [77, 100],
                  media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  url: 'https://t.co/vBVso0kX3V',
                  display_url: 'pic.twitter.com/vBVso0kX3V',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  },
                  source_status_id: 916886937209675800,
                  source_status_id_str: '916886937209675776',
                  source_user_id: 2962738476,
                  source_user_id_str: '2962738476'
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Lite</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 821266766341017600,
              id_str: '821266766341017600',
              name: 'Varunmsdian77',
              screen_name: 'Varunmsdian77',
              location: 'Tamilnadu,INDIA',
              description: 'Proud to be an msdian. A big fan of sivakarthikeyanism.',
              url: null,
              entities: { description: { urls: [] } },
              protected: false,
              followers_count: 18,
              friends_count: 94,
              listed_count: 0,
              created_at: 'Tue Jan 17 08:03:50 +0000 2017',
              favourites_count: 389,
              utc_offset: null,
              time_zone: null,
              geo_enabled: false,
              verified: false,
              statuses_count: 1024,
              lang: 'en-gb',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'F5F8FA',
              profile_background_image_url: null,
              profile_background_image_url_https: null,
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: false,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 04:44:15 +0000 2017',
              id: 916886937209675800,
              id_str: '916886937209675776',
              text: 'His Smile is reason for billions Smile😇\n#Dhoni #INDvAUS https://t.co/vBVso0kX3V',
              truncated: false,
              entities: {
                hashtags: [{ text: 'Dhoni', indices: [40, 46] }, { text: 'INDvAUS', indices: [47, 55] }],
                symbols: [],
                user_mentions: [],
                urls: [],
                media: [
                  {
                    id: 916886912534667300,
                    id_str: '916886912534667265',
                    indices: [56, 79],
                    media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                    media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                    url: 'https://t.co/vBVso0kX3V',
                    display_url: 'pic.twitter.com/vBVso0kX3V',
                    expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                    type: 'photo',
                    sizes: {
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      medium: { w: 1080, h: 1080, resize: 'fit' },
                      large: { w: 1080, h: 1080, resize: 'fit' },
                      small: { w: 680, h: 680, resize: 'fit' }
                    }
                  }
                ]
              },
              extended_entities: {
                media: [
                  {
                    id: 916886912534667300,
                    id_str: '916886912534667265',
                    indices: [56, 79],
                    media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                    media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                    url: 'https://t.co/vBVso0kX3V',
                    display_url: 'pic.twitter.com/vBVso0kX3V',
                    expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                    type: 'photo',
                    sizes: {
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      medium: { w: 1080, h: 1080, resize: 'fit' },
                      large: { w: 1080, h: 1080, resize: 'fit' },
                      small: { w: 680, h: 680, resize: 'fit' }
                    }
                  }
                ]
              },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 2962738476,
                id_str: '2962738476',
                name: 'MS Dhoni Fans #Dhoni',
                screen_name: 'msdfansofficial',
                location: 'Ranchi, India',
                description: 'Official Fan Club of Mahendra Singh Dhoni. insights & updates on MS Dhoni. #Dhoni @msdhoni https://t.co/DxND6ychgJ',
                url: 'https://t.co/vIL4WfRXaa',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/vIL4WfRXaa',
                        expanded_url: 'https://www.facebook.com/MSDhoniFansOfficial',
                        display_url: 'facebook.com/MSDhoniFansOff…',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: {
                    urls: [
                      {
                        url: 'https://t.co/DxND6ychgJ',
                        expanded_url: 'https://www.instagram.com/msdhonifansofficial/',
                        display_url: 'instagram.com/msdhonifansoff…',
                        indices: [91, 114]
                      }
                    ]
                  }
                },
                protected: false,
                followers_count: 37410,
                friends_count: 28,
                listed_count: 24,
                created_at: 'Wed Jan 07 09:42:39 +0000 2015',
                favourites_count: 54,
                utc_offset: 19800,
                time_zone: 'Chennai',
                geo_enabled: true,
                verified: false,
                statuses_count: 5483,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: '000000',
                profile_background_image_url: 'http://abs.twimg.com/images/themes/theme16/bg.gif',
                profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme16/bg.gif',
                profile_background_tile: false,
                profile_image_url: 'http://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/2962738476/1493447487',
                profile_link_color: '73CDF7',
                profile_sidebar_border_color: '000000',
                profile_sidebar_fill_color: '000000',
                profile_text_color: '000000',
                profile_use_background_image: false,
                has_extended_profile: false,
                default_profile: false,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 51,
              favorite_count: 357,
              favorited: false,
              retweeted: false,
              possibly_sensitive: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 51,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:28:15 +0000 2017',
            id: 917018808253952000,
            id_str: '917018808253952002',
            text: 'Virat Kohli’s adorable moments with MS Dhoni’s daughter Ziva.. https://t.co/1cQiRsZOff',
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [],
              urls: [
                {
                  url: 'https://t.co/1cQiRsZOff',
                  expanded_url: 'http://indianexpress.com/photos/sports-gallery/virat-kohlis-adorable-moments-with-ms-dhonis-daughter-ziva-pics-4880713/',
                  display_url: 'indianexpress.com/photos/sports-…',
                  indices: [63, 86]
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://NewsBoss.in" rel="nofollow">NewsBoss.in</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 753259712028696600,
              id_str: '753259712028696576',
              name: 'NewsBoss.in',
              screen_name: 'NewsBossIndia',
              location: '',
              description: 'News, you can choose!',
              url: 'https://t.co/y9fpUd38h3',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/y9fpUd38h3',
                      expanded_url: 'http://NewsBoss.in',
                      display_url: 'NewsBoss.in',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 945,
              friends_count: 1,
              listed_count: 219,
              created_at: 'Wed Jul 13 16:08:05 +0000 2016',
              favourites_count: 1,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: false,
              verified: false,
              statuses_count: 1175250,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/753260679692333057/AS4Xiw4q_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/753260679692333057/AS4Xiw4q_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/753259712028696576/1468426410',
              profile_link_color: 'E81C4F',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 0,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: true,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:27:54 +0000 2017',
            id: 917018717048913900,
            id_str: '917018717048913920',
            text: 'RT @msdfansofficial: That smile ♥\n#Dhoni #Ranchi #INDvsAUS https://t.co/mGpu18BGw6',
            truncated: false,
            entities: {
              hashtags: [
                { text: 'Dhoni', indices: [34, 40] },
                { text: 'Ranchi', indices: [41, 48] },
                { text: 'INDvsAUS', indices: [49, 58] }
              ],
              symbols: [],
              user_mentions: [
                {
                  screen_name: 'msdfansofficial',
                  name: 'MS Dhoni Fans #Dhoni',
                  id: 2962738476,
                  id_str: '2962738476',
                  indices: [3, 19]
                }
              ],
              urls: [],
              media: [
                {
                  id: 916843458215559200,
                  id_str: '916843458215559168',
                  indices: [59, 82],
                  media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  url: 'https://t.co/mGpu18BGw6',
                  display_url: 'pic.twitter.com/mGpu18BGw6',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                  type: 'photo',
                  sizes: {
                    small: { w: 680, h: 383, resize: 'fit' },
                    medium: { w: 1200, h: 675, resize: 'fit' },
                    large: { w: 1280, h: 720, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' }
                  },
                  source_status_id: 916843468424601600,
                  source_status_id_str: '916843468424601601',
                  source_user_id: 2962738476,
                  source_user_id_str: '2962738476'
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916843458215559200,
                  id_str: '916843458215559168',
                  indices: [59, 82],
                  media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  url: 'https://t.co/mGpu18BGw6',
                  display_url: 'pic.twitter.com/mGpu18BGw6',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                  type: 'photo',
                  sizes: {
                    small: { w: 680, h: 383, resize: 'fit' },
                    medium: { w: 1200, h: 675, resize: 'fit' },
                    large: { w: 1280, h: 720, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' }
                  },
                  source_status_id: 916843468424601600,
                  source_status_id_str: '916843468424601601',
                  source_user_id: 2962738476,
                  source_user_id_str: '2962738476'
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Lite</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 821266766341017600,
              id_str: '821266766341017600',
              name: 'Varunmsdian77',
              screen_name: 'Varunmsdian77',
              location: 'Tamilnadu,INDIA',
              description: 'Proud to be an msdian. A big fan of sivakarthikeyanism.',
              url: null,
              entities: { description: { urls: [] } },
              protected: false,
              followers_count: 18,
              friends_count: 94,
              listed_count: 0,
              created_at: 'Tue Jan 17 08:03:50 +0000 2017',
              favourites_count: 389,
              utc_offset: null,
              time_zone: null,
              geo_enabled: false,
              verified: false,
              statuses_count: 1024,
              lang: 'en-gb',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'F5F8FA',
              profile_background_image_url: null,
              profile_background_image_url_https: null,
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: false,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 01:51:31 +0000 2017',
              id: 916843468424601600,
              id_str: '916843468424601601',
              text: 'That smile ♥\n#Dhoni #Ranchi #INDvsAUS https://t.co/mGpu18BGw6',
              truncated: false,
              entities: {
                hashtags: [
                  { text: 'Dhoni', indices: [13, 19] },
                  { text: 'Ranchi', indices: [20, 27] },
                  { text: 'INDvsAUS', indices: [28, 37] }
                ],
                symbols: [],
                user_mentions: [],
                urls: [],
                media: [
                  {
                    id: 916843458215559200,
                    id_str: '916843458215559168',
                    indices: [38, 61],
                    media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                    media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                    url: 'https://t.co/mGpu18BGw6',
                    display_url: 'pic.twitter.com/mGpu18BGw6',
                    expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                    type: 'photo',
                    sizes: {
                      small: { w: 680, h: 383, resize: 'fit' },
                      medium: { w: 1200, h: 675, resize: 'fit' },
                      large: { w: 1280, h: 720, resize: 'fit' },
                      thumb: { w: 150, h: 150, resize: 'crop' }
                    }
                  }
                ]
              },
              extended_entities: {
                media: [
                  {
                    id: 916843458215559200,
                    id_str: '916843458215559168',
                    indices: [38, 61],
                    media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                    media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                    url: 'https://t.co/mGpu18BGw6',
                    display_url: 'pic.twitter.com/mGpu18BGw6',
                    expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                    type: 'photo',
                    sizes: {
                      small: { w: 680, h: 383, resize: 'fit' },
                      medium: { w: 1200, h: 675, resize: 'fit' },
                      large: { w: 1280, h: 720, resize: 'fit' },
                      thumb: { w: 150, h: 150, resize: 'crop' }
                    }
                  }
                ]
              },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 2962738476,
                id_str: '2962738476',
                name: 'MS Dhoni Fans #Dhoni',
                screen_name: 'msdfansofficial',
                location: 'Ranchi, India',
                description: 'Official Fan Club of Mahendra Singh Dhoni. insights & updates on MS Dhoni. #Dhoni @msdhoni https://t.co/DxND6ychgJ',
                url: 'https://t.co/vIL4WfRXaa',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/vIL4WfRXaa',
                        expanded_url: 'https://www.facebook.com/MSDhoniFansOfficial',
                        display_url: 'facebook.com/MSDhoniFansOff…',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: {
                    urls: [
                      {
                        url: 'https://t.co/DxND6ychgJ',
                        expanded_url: 'https://www.instagram.com/msdhonifansofficial/',
                        display_url: 'instagram.com/msdhonifansoff…',
                        indices: [91, 114]
                      }
                    ]
                  }
                },
                protected: false,
                followers_count: 37410,
                friends_count: 28,
                listed_count: 24,
                created_at: 'Wed Jan 07 09:42:39 +0000 2015',
                favourites_count: 54,
                utc_offset: 19800,
                time_zone: 'Chennai',
                geo_enabled: true,
                verified: false,
                statuses_count: 5483,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: '000000',
                profile_background_image_url: 'http://abs.twimg.com/images/themes/theme16/bg.gif',
                profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme16/bg.gif',
                profile_background_tile: false,
                profile_image_url: 'http://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/2962738476/1493447487',
                profile_link_color: '73CDF7',
                profile_sidebar_border_color: '000000',
                profile_sidebar_fill_color: '000000',
                profile_text_color: '000000',
                profile_use_background_image: false,
                has_extended_profile: false,
                default_profile: false,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 55,
              favorite_count: 382,
              favorited: false,
              retweeted: false,
              possibly_sensitive: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 55,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:27:44 +0000 2017',
            id: 917018676200579100,
            id_str: '917018676200579073',
            text: "RT @dna: WATCH: Virat Kohli playing with MS Dhoni's daughter Ziva is the cutest thing you'll see today! https://t.co/rsAovpXzIA https://t.c…",
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [{ screen_name: 'dna', name: 'DNA', id: 17710740, id_str: '17710740', indices: [3, 7] }],
              urls: [
                {
                  url: 'https://t.co/rsAovpXzIA',
                  expanded_url: 'http://dnai.in/f6r2',
                  display_url: 'dnai.in/f6r2',
                  indices: [104, 127]
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 140739269,
              id_str: '140739269',
              name: 'Shekhar_MUFC',
              screen_name: 'shekharlog',
              location: 'India',
              description: 'Big Sports Enthusiast | In love with @MANUTD | #TeamIndia | @DFB_Team Football | #CR7 | #MSD | Movies | Foodie | F1 | ForceIndia | Proud Indian |',
              url: 'https://t.co/0va3mvrN1I',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/0va3mvrN1I',
                      expanded_url: 'http://www.facebook.com/shekharlog',
                      display_url: 'facebook.com/shekharlog',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 723,
              friends_count: 881,
              listed_count: 20,
              created_at: 'Thu May 06 08:03:02 +0000 2010',
              favourites_count: 710,
              utc_offset: 19800,
              time_zone: 'Kolkata',
              geo_enabled: true,
              verified: false,
              statuses_count: 6600,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000064601484/910df8a9d758d0d68b18a0988e629091.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000064601484/910df8a9d758d0d68b18a0988e629091.jpeg',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/844618594658996224/0a7Wh_o1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/844618594658996224/0a7Wh_o1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/140739269/1448163197',
              profile_link_color: '1281A3',
              profile_sidebar_border_color: 'FFFFFF',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 12:28:11 +0000 2017',
              id: 917003691273494500,
              id_str: '917003691273494528',
              text: "WATCH: Virat Kohli playing with MS Dhoni's daughter Ziva is the cutest thing you'll see today!… https://t.co/SmnHRYH3Pg",
              truncated: true,
              entities: {
                hashtags: [],
                symbols: [],
                user_mentions: [],
                urls: [
                  {
                    url: 'https://t.co/SmnHRYH3Pg',
                    expanded_url: 'https://twitter.com/i/web/status/917003691273494528',
                    display_url: 'twitter.com/i/web/status/9…',
                    indices: [96, 119]
                  }
                ]
              },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 17710740,
                id_str: '17710740',
                name: 'DNA',
                screen_name: 'dna',
                location: 'India',
                description: 'Follow us for news, photos, videos and the latest trends from India and around the world. http://t.co/IZXefx3rSt',
                url: 'http://t.co/IZXefx3rSt',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'http://t.co/IZXefx3rSt',
                        expanded_url: 'http://www.dnaindia.com',
                        display_url: 'dnaindia.com',
                        indices: [0, 22]
                      }
                    ]
                  },
                  description: {
                    urls: [
                      {
                        url: 'http://t.co/IZXefx3rSt',
                        expanded_url: 'http://www.dnaindia.com',
                        display_url: 'dnaindia.com',
                        indices: [90, 112]
                      }
                    ]
                  }
                },
                protected: false,
                followers_count: 1746066,
                friends_count: 354,
                listed_count: 3445,
                created_at: 'Fri Nov 28 15:39:38 +0000 2008',
                favourites_count: 92,
                utc_offset: 19800,
                time_zone: 'New Delhi',
                geo_enabled: false,
                verified: true,
                statuses_count: 414256,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: 'FFFFFF',
                profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000175778006/yAHZPUM0.jpeg',
                profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000175778006/yAHZPUM0.jpeg',
                profile_background_tile: false,
                profile_image_url: 'http://pbs.twimg.com/profile_images/864432203370905601/yWa-6Q9O_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/864432203370905601/yWa-6Q9O_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/17710740/1507174704',
                profile_link_color: '1B95E0',
                profile_sidebar_border_color: '000000',
                profile_sidebar_fill_color: '542437',
                profile_text_color: 'C02942',
                profile_use_background_image: true,
                has_extended_profile: false,
                default_profile: false,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'regular'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 8,
              favorite_count: 45,
              favorited: false,
              retweeted: false,
              possibly_sensitive: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 8,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:27:43 +0000 2017',
            id: 917018670249009200,
            id_str: '917018670249009153',
            text: 'RT @BrokenCricket: " Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [
                {
                  screen_name: 'BrokenCricket',
                  name: 'Broken Cricket',
                  id: 907619970,
                  id_str: '907619970',
                  indices: [3, 17]
                }
              ],
              urls: []
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="https://mobile.twitter.com" rel="nofollow">Mobile Web (M2)</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 917018286910345200,
              id_str: '917018286910345218',
              name: 'BUY FOLLO₩ERS :yuk',
              screen_name: 'KilleanTessa',
              location: '',
              description: 'Check the first twěět for the Iiŉk \n\nref:riebfpnb',
              url: null,
              entities: { description: { urls: [] } },
              protected: false,
              followers_count: 0,
              friends_count: 0,
              listed_count: 0,
              created_at: 'Sun Oct 08 13:26:11 +0000 2017',
              favourites_count: 0,
              utc_offset: null,
              time_zone: null,
              geo_enabled: false,
              verified: false,
              statuses_count: 279,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'F5F8FA',
              profile_background_image_url: null,
              profile_background_image_url_https: null,
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/917018585867853825/VzoICPy7_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/917018585867853825/VzoICPy7_normal.jpg',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: false,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 08:34:36 +0000 2017',
              id: 916944908337868800,
              id_str: '916944908337868800',
              text: '" Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
              truncated: false,
              entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 907619970,
                id_str: '907619970',
                name: 'Broken Cricket',
                screen_name: 'BrokenCricket',
                location: '',
                description: 'I was married to Sachin then fell in Love with Kohli now secretly dating AB',
                url: 'https://t.co/FBWn6henPH',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/FBWn6henPH',
                        expanded_url: 'https://www.facebook.com/BrokenCricketofficial/',
                        display_url: 'facebook.com/BrokenCricketo…',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: { urls: [] }
                },
                protected: false,
                followers_count: 172513,
                friends_count: 87,
                listed_count: 246,
                created_at: 'Sat Oct 27 08:03:44 +0000 2012',
                favourites_count: 13615,
                utc_offset: 10800,
                time_zone: 'Athens',
                geo_enabled: false,
                verified: false,
                statuses_count: 31679,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: 'C0DEED',
                profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_tile: false,
                profile_image_url: 'http://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/907619970/1498923596',
                profile_link_color: '1DA1F2',
                profile_sidebar_border_color: 'C0DEED',
                profile_sidebar_fill_color: 'DDEEF6',
                profile_text_color: '333333',
                profile_use_background_image: true,
                has_extended_profile: true,
                default_profile: true,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 363,
              favorite_count: 830,
              favorited: false,
              retweeted: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 363,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:27:34 +0000 2017',
            id: 917018635352207400,
            id_str: '917018635352207360',
            text: 'RT @officialDhoniFC: These Smiles from our Inspiration, make our Super Sunday. #Dhoni #MSD #Ranchi #IndvAus #Mahi https://t.co/0mDXDrHobe',
            truncated: false,
            entities: {
              hashtags: [
                { text: 'Dhoni', indices: [79, 85] },
                { text: 'MSD', indices: [86, 90] },
                { text: 'Ranchi', indices: [91, 98] },
                { text: 'IndvAus', indices: [99, 107] },
                { text: 'Mahi', indices: [108, 113] }
              ],
              symbols: [],
              user_mentions: [
                {
                  screen_name: 'officialDhoniFC',
                  name: '#Dhoni #Dhoni FC',
                  id: 3019564778,
                  id_str: '3019564778',
                  indices: [3, 19]
                }
              ],
              urls: [],
              media: [
                {
                  id: 916913274330812400,
                  id_str: '916913274330812416',
                  indices: [114, 137],
                  media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  url: 'https://t.co/0mDXDrHobe',
                  display_url: 'pic.twitter.com/0mDXDrHobe',
                  expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  },
                  source_status_id: 916913305146474500,
                  source_status_id_str: '916913305146474496',
                  source_user_id: 1244185244,
                  source_user_id_str: '1244185244'
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916913274330812400,
                  id_str: '916913274330812416',
                  indices: [114, 137],
                  media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  url: 'https://t.co/0mDXDrHobe',
                  display_url: 'pic.twitter.com/0mDXDrHobe',
                  expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  },
                  source_status_id: 916913305146474500,
                  source_status_id_str: '916913305146474496',
                  source_user_id: 1244185244,
                  source_user_id_str: '1244185244'
                },
                {
                  id: 916913293846966300,
                  id_str: '916913293846966273',
                  indices: [114, 137],
                  media_url: 'http://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                  url: 'https://t.co/0mDXDrHobe',
                  display_url: 'pic.twitter.com/0mDXDrHobe',
                  expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                  type: 'photo',
                  sizes: {
                    small: { w: 559, h: 547, resize: 'fit' },
                    large: { w: 559, h: 547, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 559, h: 547, resize: 'fit' }
                  },
                  source_status_id: 916913305146474500,
                  source_status_id_str: '916913305146474496',
                  source_user_id: 1244185244,
                  source_user_id_str: '1244185244'
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 902940305745338400,
              id_str: '902940305745338369',
              name: 'karthikeyan Palanisa',
              screen_name: 'karthikeyanPa10',
              location: 'Tamil Nadu, India',
              description: 'Sports Cricketers and Commentators Cricketers and Commentators Sports News, TV and Scores Entertainment South Indian Breaking News CEOs Business & CEOs',
              url: null,
              entities: { description: { urls: [] } },
              protected: false,
              followers_count: 5,
              friends_count: 175,
              listed_count: 0,
              created_at: 'Wed Aug 30 17:05:19 +0000 2017',
              favourites_count: 9,
              utc_offset: null,
              time_zone: null,
              geo_enabled: false,
              verified: false,
              statuses_count: 344,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'F5F8FA',
              profile_background_image_url: null,
              profile_background_image_url_https: null,
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/903264169541025792/lF6bzcvg_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/903264169541025792/lF6bzcvg_normal.jpg',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 06:35:05 +0000 2017',
              id: 916914828081582100,
              id_str: '916914828081582080',
              text: 'These Smiles from our Inspiration, make our Super Sunday. #Dhoni #MSD #Ranchi #IndvAus #Mahi https://t.co/0mDXDrHobe',
              truncated: false,
              entities: {
                hashtags: [
                  { text: 'Dhoni', indices: [58, 64] },
                  { text: 'MSD', indices: [65, 69] },
                  { text: 'Ranchi', indices: [70, 77] },
                  { text: 'IndvAus', indices: [78, 86] },
                  { text: 'Mahi', indices: [87, 92] }
                ],
                symbols: [],
                user_mentions: [],
                urls: [],
                media: [
                  {
                    id: 916913274330812400,
                    id_str: '916913274330812416',
                    indices: [93, 116],
                    media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                    media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                    url: 'https://t.co/0mDXDrHobe',
                    display_url: 'pic.twitter.com/0mDXDrHobe',
                    expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                    type: 'photo',
                    sizes: {
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      medium: { w: 1080, h: 1080, resize: 'fit' },
                      large: { w: 1080, h: 1080, resize: 'fit' },
                      small: { w: 680, h: 680, resize: 'fit' }
                    },
                    source_status_id: 916913305146474500,
                    source_status_id_str: '916913305146474496',
                    source_user_id: 1244185244,
                    source_user_id_str: '1244185244'
                  }
                ]
              },
              extended_entities: {
                media: [
                  {
                    id: 916913274330812400,
                    id_str: '916913274330812416',
                    indices: [93, 116],
                    media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                    media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                    url: 'https://t.co/0mDXDrHobe',
                    display_url: 'pic.twitter.com/0mDXDrHobe',
                    expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                    type: 'photo',
                    sizes: {
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      medium: { w: 1080, h: 1080, resize: 'fit' },
                      large: { w: 1080, h: 1080, resize: 'fit' },
                      small: { w: 680, h: 680, resize: 'fit' }
                    },
                    source_status_id: 916913305146474500,
                    source_status_id_str: '916913305146474496',
                    source_user_id: 1244185244,
                    source_user_id_str: '1244185244'
                  },
                  {
                    id: 916913293846966300,
                    id_str: '916913293846966273',
                    indices: [93, 116],
                    media_url: 'http://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                    media_url_https: 'https://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                    url: 'https://t.co/0mDXDrHobe',
                    display_url: 'pic.twitter.com/0mDXDrHobe',
                    expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                    type: 'photo',
                    sizes: {
                      small: { w: 559, h: 547, resize: 'fit' },
                      large: { w: 559, h: 547, resize: 'fit' },
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      medium: { w: 559, h: 547, resize: 'fit' }
                    },
                    source_status_id: 916913305146474500,
                    source_status_id_str: '916913305146474496',
                    source_user_id: 1244185244,
                    source_user_id_str: '1244185244'
                  }
                ]
              },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="https://ifttt.com" rel="nofollow">IFTTT</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 3019564778,
                id_str: '3019564778',
                name: '#Dhoni #Dhoni FC',
                screen_name: 'officialDhoniFC',
                location: 'India √',
                description: '#MsDhoni #Dhoni\r\n#MsDhoni #Dhoni\r\n#MsDhoni #Dhoni\r\nMsDhoni Dhoni\r\n#MsDhoni #Dhoni\r\nMsDhoni Dhoni\r\n#MsDhoni #Dhoni\r\nMsDhoni Dhoni\r\nMsDhoni Dhoni\r\n#Dhoni  #Dhoni',
                url: 'https://t.co/CjQ5gS1lWY',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/CjQ5gS1lWY',
                        expanded_url: 'http://Espncricinfo.com',
                        display_url: 'Espncricinfo.com',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: { urls: [] }
                },
                protected: false,
                followers_count: 35745,
                friends_count: 25,
                listed_count: 76,
                created_at: 'Sat Feb 14 11:51:57 +0000 2015',
                favourites_count: 1091,
                utc_offset: 18000,
                time_zone: 'Karachi',
                geo_enabled: false,
                verified: false,
                statuses_count: 26152,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: '000000',
                profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_tile: false,
                profile_image_url: 'http://pbs.twimg.com/profile_images/911771392013688832/tZEKmYJa_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/911771392013688832/tZEKmYJa_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/3019564778/1506218219',
                profile_link_color: 'FA743E',
                profile_sidebar_border_color: '000000',
                profile_sidebar_fill_color: '000000',
                profile_text_color: '000000',
                profile_use_background_image: false,
                has_extended_profile: true,
                default_profile: false,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 2,
              favorite_count: 10,
              favorited: false,
              retweeted: false,
              possibly_sensitive: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 2,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:27:16 +0000 2017',
            id: 917018558093156400,
            id_str: '917018558093156352',
            text: 'RT @DHONIism: Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Ziva', indices: [30, 35] }],
              symbols: [],
              user_mentions: [
                { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
              ],
              urls: [],
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [62, 85],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'photo',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  source_status_id: 916997430331162600,
                  source_status_id_str: '916997430331162624',
                  source_user_id: 1727522635,
                  source_user_id_str: '1727522635'
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [62, 85],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'video',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  source_status_id: 916997430331162600,
                  source_status_id_str: '916997430331162624',
                  source_user_id: 1727522635,
                  source_user_id_str: '1727522635',
                  video_info: {
                    aspect_ratio: [20, 11],
                    duration_millis: 29267,
                    variants: [
                      {
                        bitrate: 320000,
                        content_type: 'video/mp4',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                      },
                      {
                        content_type: 'application/x-mpegURL',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                      }
                    ]
                  },
                  additional_media_info: {
                    monetizable: false,
                    source_user: {
                      id: 1727522635,
                      id_str: '1727522635',
                      name: 'DHONIsm ♥',
                      screen_name: 'DHONIism',
                      location: 'from Tamil Nadu to World :)',
                      description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                      url: 'https://t.co/VSrp5PXoY5',
                      entities: {
                        url: {
                          urls: [
                            {
                              url: 'https://t.co/VSrp5PXoY5',
                              expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                              display_url: 'facebook.com/BleedDhonIsm',
                              indices: [0, 23]
                            }
                          ]
                        },
                        description: { urls: [] }
                      },
                      protected: false,
                      followers_count: 133889,
                      friends_count: 23,
                      listed_count: 32,
                      created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                      favourites_count: 743,
                      utc_offset: 19800,
                      time_zone: 'New Delhi',
                      geo_enabled: true,
                      verified: false,
                      statuses_count: 7310,
                      lang: 'en',
                      contributors_enabled: false,
                      is_translator: false,
                      is_translation_enabled: false,
                      profile_background_color: 'C0DEED',
                      profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                      profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                      profile_background_tile: true,
                      profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                      profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                      profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                      profile_link_color: '0084B4',
                      profile_sidebar_border_color: 'FFFFFF',
                      profile_sidebar_fill_color: 'DDEEF6',
                      profile_text_color: '333333',
                      profile_use_background_image: true,
                      has_extended_profile: true,
                      default_profile: false,
                      default_profile_image: false,
                      following: false,
                      follow_request_sent: false,
                      notifications: false,
                      translator_type: 'none'
                    }
                  }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 585334504,
              id_str: '585334504',
              name: 'Mersal Bharath',
              screen_name: 'BharathTinz',
              location: 'Chennai, India',
              description: 'Thalapathy Veriyan! 😎😎😍 MSDian! ❤❤❤❤ Amateur photographer. 😁😝  Co-founder and Director of Photography : @sutta_vada',
              url: null,
              entities: { description: { urls: [] } },
              protected: false,
              followers_count: 323,
              friends_count: 300,
              listed_count: 6,
              created_at: 'Sun May 20 03:44:18 +0000 2012',
              favourites_count: 63493,
              utc_offset: null,
              time_zone: null,
              geo_enabled: false,
              verified: false,
              statuses_count: 26125,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/916934292697104384/eKW4W9C1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/916934292697104384/eKW4W9C1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/585334504/1507449149',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 12:03:19 +0000 2017',
              id: 916997430331162600,
              id_str: '916997430331162624',
              text: 'Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
              truncated: false,
              entities: {
                hashtags: [{ text: 'Ziva', indices: [16, 21] }],
                symbols: [],
                user_mentions: [],
                urls: [],
                media: [
                  {
                    id: 916997015497613300,
                    id_str: '916997015497613313',
                    indices: [48, 71],
                    media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    url: 'https://t.co/nzngJRmy81',
                    display_url: 'pic.twitter.com/nzngJRmy81',
                    expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                    type: 'photo',
                    sizes: {
                      medium: { w: 600, h: 330, resize: 'fit' },
                      large: { w: 640, h: 352, resize: 'fit' },
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      small: { w: 340, h: 187, resize: 'fit' }
                    }
                  }
                ]
              },
              extended_entities: {
                media: [
                  {
                    id: 916997015497613300,
                    id_str: '916997015497613313',
                    indices: [48, 71],
                    media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    url: 'https://t.co/nzngJRmy81',
                    display_url: 'pic.twitter.com/nzngJRmy81',
                    expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                    type: 'video',
                    sizes: {
                      medium: { w: 600, h: 330, resize: 'fit' },
                      large: { w: 640, h: 352, resize: 'fit' },
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      small: { w: 340, h: 187, resize: 'fit' }
                    },
                    video_info: {
                      aspect_ratio: [20, 11],
                      duration_millis: 29267,
                      variants: [
                        {
                          bitrate: 320000,
                          content_type: 'video/mp4',
                          url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                        },
                        {
                          content_type: 'application/x-mpegURL',
                          url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                        }
                      ]
                    },
                    additional_media_info: { monetizable: false }
                  }
                ]
              },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 1727522635,
                id_str: '1727522635',
                name: 'DHONIsm ♥',
                screen_name: 'DHONIism',
                location: 'from Tamil Nadu to World :)',
                description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                url: 'https://t.co/VSrp5PXoY5',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/VSrp5PXoY5',
                        expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                        display_url: 'facebook.com/BleedDhonIsm',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: { urls: [] }
                },
                protected: false,
                followers_count: 133889,
                friends_count: 23,
                listed_count: 32,
                created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                favourites_count: 743,
                utc_offset: 19800,
                time_zone: 'New Delhi',
                geo_enabled: true,
                verified: false,
                statuses_count: 7310,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: 'C0DEED',
                profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                profile_background_tile: true,
                profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                profile_link_color: '0084B4',
                profile_sidebar_border_color: 'FFFFFF',
                profile_sidebar_fill_color: 'DDEEF6',
                profile_text_color: '333333',
                profile_use_background_image: true,
                has_extended_profile: true,
                default_profile: false,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 112,
              favorite_count: 309,
              favorited: false,
              retweeted: false,
              possibly_sensitive: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 112,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:26:59 +0000 2017',
            id: 917018488534732800,
            id_str: '917018488534732805',
            text: 'RT @BrokenCricket: " Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [
                {
                  screen_name: 'BrokenCricket',
                  name: 'Broken Cricket',
                  id: 907619970,
                  id_str: '907619970',
                  indices: [3, 17]
                }
              ],
              urls: []
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 144089436,
              id_str: '144089436',
              name: 'Jegan',
              screen_name: 'IamJegan',
              location: 'Tuticorin / Trichy / Chennai',
              description: 'A Big Fanatic of @SGanguly99. Want him to Coach Team India & Lift the World Cup! Thala Ajith Addict!',
              url: 'https://t.co/lyD9bn1TXG',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/lyD9bn1TXG',
                      expanded_url: 'http://thecineket.com',
                      display_url: 'thecineket.com',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 3270,
              friends_count: 281,
              listed_count: 15,
              created_at: 'Sat May 15 07:56:02 +0000 2010',
              favourites_count: 778,
              utc_offset: 19800,
              time_zone: 'Chennai',
              geo_enabled: true,
              verified: false,
              statuses_count: 31673,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '352726',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme5/bg.gif',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme5/bg.gif',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/906201523725623296/pHeFZ-tQ_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/906201523725623296/pHeFZ-tQ_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/144089436/1436104530',
              profile_link_color: 'D02B55',
              profile_sidebar_border_color: '829D5E',
              profile_sidebar_fill_color: '99CC33',
              profile_text_color: '3E4415',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 08:34:36 +0000 2017',
              id: 916944908337868800,
              id_str: '916944908337868800',
              text: '" Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
              truncated: false,
              entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 907619970,
                id_str: '907619970',
                name: 'Broken Cricket',
                screen_name: 'BrokenCricket',
                location: '',
                description: 'I was married to Sachin then fell in Love with Kohli now secretly dating AB',
                url: 'https://t.co/FBWn6henPH',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/FBWn6henPH',
                        expanded_url: 'https://www.facebook.com/BrokenCricketofficial/',
                        display_url: 'facebook.com/BrokenCricketo…',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: { urls: [] }
                },
                protected: false,
                followers_count: 172513,
                friends_count: 87,
                listed_count: 246,
                created_at: 'Sat Oct 27 08:03:44 +0000 2012',
                favourites_count: 13615,
                utc_offset: 10800,
                time_zone: 'Athens',
                geo_enabled: false,
                verified: false,
                statuses_count: 31679,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: 'C0DEED',
                profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_tile: false,
                profile_image_url: 'http://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/907619970/1498923596',
                profile_link_color: '1DA1F2',
                profile_sidebar_border_color: 'C0DEED',
                profile_sidebar_fill_color: 'DDEEF6',
                profile_text_color: '333333',
                profile_use_background_image: true,
                has_extended_profile: true,
                default_profile: true,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 363,
              favorite_count: 830,
              favorited: false,
              retweeted: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 363,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:26:34 +0000 2017',
            id: 917018382884495400,
            id_str: '917018382884495360',
            text: 'RT @DHONIism: Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Ziva', indices: [30, 35] }],
              symbols: [],
              user_mentions: [
                { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
              ],
              urls: [],
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [62, 85],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'photo',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  source_status_id: 916997430331162600,
                  source_status_id_str: '916997430331162624',
                  source_user_id: 1727522635,
                  source_user_id_str: '1727522635'
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [62, 85],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'video',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  source_status_id: 916997430331162600,
                  source_status_id_str: '916997430331162624',
                  source_user_id: 1727522635,
                  source_user_id_str: '1727522635',
                  video_info: {
                    aspect_ratio: [20, 11],
                    duration_millis: 29267,
                    variants: [
                      {
                        bitrate: 320000,
                        content_type: 'video/mp4',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                      },
                      {
                        content_type: 'application/x-mpegURL',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                      }
                    ]
                  },
                  additional_media_info: {
                    monetizable: false,
                    source_user: {
                      id: 1727522635,
                      id_str: '1727522635',
                      name: 'DHONIsm ♥',
                      screen_name: 'DHONIism',
                      location: 'from Tamil Nadu to World :)',
                      description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                      url: 'https://t.co/VSrp5PXoY5',
                      entities: {
                        url: {
                          urls: [
                            {
                              url: 'https://t.co/VSrp5PXoY5',
                              expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                              display_url: 'facebook.com/BleedDhonIsm',
                              indices: [0, 23]
                            }
                          ]
                        },
                        description: { urls: [] }
                      },
                      protected: false,
                      followers_count: 133889,
                      friends_count: 23,
                      listed_count: 32,
                      created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                      favourites_count: 743,
                      utc_offset: 19800,
                      time_zone: 'New Delhi',
                      geo_enabled: true,
                      verified: false,
                      statuses_count: 7310,
                      lang: 'en',
                      contributors_enabled: false,
                      is_translator: false,
                      is_translation_enabled: false,
                      profile_background_color: 'C0DEED',
                      profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                      profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                      profile_background_tile: true,
                      profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                      profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                      profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                      profile_link_color: '0084B4',
                      profile_sidebar_border_color: 'FFFFFF',
                      profile_sidebar_fill_color: 'DDEEF6',
                      profile_text_color: '333333',
                      profile_use_background_image: true,
                      has_extended_profile: true,
                      default_profile: false,
                      default_profile_image: false,
                      following: false,
                      follow_request_sent: false,
                      notifications: false,
                      translator_type: 'none'
                    }
                  }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 3174923622,
              id_str: '3174923622',
              name: 'Aяνιηтн',
              screen_name: 'ArvinthVj',
              location: 'Erode, India',
              description: 'சராசரி இந்திய ப்ரஜை || Mech || Cine | Tech freak\n|| A man in search is the Man Indeed || Proud Gixxeriann😎',
              url: null,
              entities: { description: { urls: [] } },
              protected: false,
              followers_count: 5112,
              friends_count: 465,
              listed_count: 22,
              created_at: 'Sun Apr 26 05:37:28 +0000 2015',
              favourites_count: 16446,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 28355,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '642D8B',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme10/bg.gif',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme10/bg.gif',
              profile_background_tile: true,
              profile_image_url: 'http://pbs.twimg.com/profile_images/911612405133615104/Lmh9E_-S_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/911612405133615104/Lmh9E_-S_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/3174923622/1505735402',
              profile_link_color: 'FF0000',
              profile_sidebar_border_color: '65B0DA',
              profile_sidebar_fill_color: '7AC3EE',
              profile_text_color: '3D1957',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 12:03:19 +0000 2017',
              id: 916997430331162600,
              id_str: '916997430331162624',
              text: 'Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
              truncated: false,
              entities: {
                hashtags: [{ text: 'Ziva', indices: [16, 21] }],
                symbols: [],
                user_mentions: [],
                urls: [],
                media: [
                  {
                    id: 916997015497613300,
                    id_str: '916997015497613313',
                    indices: [48, 71],
                    media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    url: 'https://t.co/nzngJRmy81',
                    display_url: 'pic.twitter.com/nzngJRmy81',
                    expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                    type: 'photo',
                    sizes: {
                      medium: { w: 600, h: 330, resize: 'fit' },
                      large: { w: 640, h: 352, resize: 'fit' },
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      small: { w: 340, h: 187, resize: 'fit' }
                    }
                  }
                ]
              },
              extended_entities: {
                media: [
                  {
                    id: 916997015497613300,
                    id_str: '916997015497613313',
                    indices: [48, 71],
                    media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    url: 'https://t.co/nzngJRmy81',
                    display_url: 'pic.twitter.com/nzngJRmy81',
                    expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                    type: 'video',
                    sizes: {
                      medium: { w: 600, h: 330, resize: 'fit' },
                      large: { w: 640, h: 352, resize: 'fit' },
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      small: { w: 340, h: 187, resize: 'fit' }
                    },
                    video_info: {
                      aspect_ratio: [20, 11],
                      duration_millis: 29267,
                      variants: [
                        {
                          bitrate: 320000,
                          content_type: 'video/mp4',
                          url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                        },
                        {
                          content_type: 'application/x-mpegURL',
                          url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                        }
                      ]
                    },
                    additional_media_info: { monetizable: false }
                  }
                ]
              },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 1727522635,
                id_str: '1727522635',
                name: 'DHONIsm ♥',
                screen_name: 'DHONIism',
                location: 'from Tamil Nadu to World :)',
                description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                url: 'https://t.co/VSrp5PXoY5',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/VSrp5PXoY5',
                        expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                        display_url: 'facebook.com/BleedDhonIsm',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: { urls: [] }
                },
                protected: false,
                followers_count: 133889,
                friends_count: 23,
                listed_count: 32,
                created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                favourites_count: 743,
                utc_offset: 19800,
                time_zone: 'New Delhi',
                geo_enabled: true,
                verified: false,
                statuses_count: 7310,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: 'C0DEED',
                profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                profile_background_tile: true,
                profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                profile_link_color: '0084B4',
                profile_sidebar_border_color: 'FFFFFF',
                profile_sidebar_fill_color: 'DDEEF6',
                profile_text_color: '333333',
                profile_use_background_image: true,
                has_extended_profile: true,
                default_profile: false,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 112,
              favorite_count: 309,
              favorited: false,
              retweeted: false,
              possibly_sensitive: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 112,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:26:30 +0000 2017',
            id: 917018367281655800,
            id_str: '917018367281655808',
            text: 'RT @FirstCric: "Had Sourav Ganguly not promoted Dhoni to No 3, he wouldn’t have become such a great player," says Virender Sehwag\nhttps://t…',
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [
                {
                  screen_name: 'FirstCric',
                  name: 'FirstCricket',
                  id: 888369388906135600,
                  id_str: '888369388906135552',
                  indices: [3, 13]
                }
              ],
              urls: []
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 1348006476,
              id_str: '1348006476',
              name: 'A',
              screen_name: 'Arijitme',
              location: 'India',
              description: '#Believeinyourself#NeverGiveup inlife#Entrepreneur#Dreamer#Achiever#Chelsea#Moviebuff#PremierLeague.. Events - DM for Enquiries',
              url: 'https://t.co/SE8gkxhOkj',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/SE8gkxhOkj',
                      expanded_url: 'https://movewanderlust.com',
                      display_url: 'movewanderlust.com',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 132,
              friends_count: 197,
              listed_count: 10,
              created_at: 'Sat Apr 13 00:26:28 +0000 2013',
              favourites_count: 2730,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 6076,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '022330',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme15/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme15/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/908981012352212992/Vf0kJ9Ha_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/908981012352212992/Vf0kJ9Ha_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/1348006476/1498468283',
              profile_link_color: '0084B4',
              profile_sidebar_border_color: 'A8C7F7',
              profile_sidebar_fill_color: 'C0DFEC',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 13:21:10 +0000 2017',
              id: 917017025662263300,
              id_str: '917017025662263296',
              text: '"Had Sourav Ganguly not promoted Dhoni to No 3, he wouldn’t have become such a great player," says Virender Sehwag\nhttps://t.co/FIANVgKeRI',
              truncated: false,
              entities: {
                hashtags: [],
                symbols: [],
                user_mentions: [],
                urls: [
                  {
                    url: 'https://t.co/FIANVgKeRI',
                    expanded_url: 'http://www.firstpost.com/firstcricket/sports-news/sourav-ganguly-sacrificed-his-batting-spot-to-make-ms-dhoni-a-great-player-says-virender-sehwag-4121625.html',
                    display_url: 'firstpost.com/firstcricket/s…',
                    indices: [115, 138]
                  }
                ]
              },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="https://about.twitter.com/products/tweetdeck" rel="nofollow">TweetDeck</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 888369388906135600,
                id_str: '888369388906135552',
                name: 'FirstCricket',
                screen_name: 'FirstCric',
                location: '',
                description: 'Bringing you live updates, breaking news, opinions and photos from the world of cricket',
                url: 'https://t.co/X7UPznamYz',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/X7UPznamYz',
                        expanded_url: 'http://www.firstpost.com/firstcricket/',
                        display_url: 'firstpost.com/firstcricket/',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: { urls: [] }
                },
                protected: false,
                followers_count: 603,
                friends_count: 47,
                listed_count: 9,
                created_at: 'Fri Jul 21 12:05:42 +0000 2017',
                favourites_count: 0,
                utc_offset: -25200,
                time_zone: 'Pacific Time (US & Canada)',
                geo_enabled: false,
                verified: false,
                statuses_count: 3114,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: '000000',
                profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_tile: false,
                profile_image_url: 'http://pbs.twimg.com/profile_images/888370591685726208/Jr6laI3X_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/888370591685726208/Jr6laI3X_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/888369388906135552/1502726156',
                profile_link_color: 'A6CE39',
                profile_sidebar_border_color: '000000',
                profile_sidebar_fill_color: '000000',
                profile_text_color: '000000',
                profile_use_background_image: false,
                has_extended_profile: false,
                default_profile: false,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 3,
              favorite_count: 2,
              favorited: false,
              retweeted: false,
              possibly_sensitive: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 3,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:25:55 +0000 2017',
            id: 917018217792417800,
            id_str: '917018217792417792',
            text: 'RT @DHONIism: Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Ziva', indices: [30, 35] }],
              symbols: [],
              user_mentions: [
                { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
              ],
              urls: [],
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [62, 85],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'photo',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  source_status_id: 916997430331162600,
                  source_status_id_str: '916997430331162624',
                  source_user_id: 1727522635,
                  source_user_id_str: '1727522635'
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [62, 85],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'video',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  source_status_id: 916997430331162600,
                  source_status_id_str: '916997430331162624',
                  source_user_id: 1727522635,
                  source_user_id_str: '1727522635',
                  video_info: {
                    aspect_ratio: [20, 11],
                    duration_millis: 29267,
                    variants: [
                      {
                        bitrate: 320000,
                        content_type: 'video/mp4',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                      },
                      {
                        content_type: 'application/x-mpegURL',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                      }
                    ]
                  },
                  additional_media_info: {
                    monetizable: false,
                    source_user: {
                      id: 1727522635,
                      id_str: '1727522635',
                      name: 'DHONIsm ♥',
                      screen_name: 'DHONIism',
                      location: 'from Tamil Nadu to World :)',
                      description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                      url: 'https://t.co/VSrp5PXoY5',
                      entities: {
                        url: {
                          urls: [
                            {
                              url: 'https://t.co/VSrp5PXoY5',
                              expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                              display_url: 'facebook.com/BleedDhonIsm',
                              indices: [0, 23]
                            }
                          ]
                        },
                        description: { urls: [] }
                      },
                      protected: false,
                      followers_count: 133889,
                      friends_count: 23,
                      listed_count: 32,
                      created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                      favourites_count: 743,
                      utc_offset: 19800,
                      time_zone: 'New Delhi',
                      geo_enabled: true,
                      verified: false,
                      statuses_count: 7310,
                      lang: 'en',
                      contributors_enabled: false,
                      is_translator: false,
                      is_translation_enabled: false,
                      profile_background_color: 'C0DEED',
                      profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                      profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                      profile_background_tile: true,
                      profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                      profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                      profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                      profile_link_color: '0084B4',
                      profile_sidebar_border_color: 'FFFFFF',
                      profile_sidebar_fill_color: 'DDEEF6',
                      profile_text_color: '333333',
                      profile_use_background_image: true,
                      has_extended_profile: true,
                      default_profile: false,
                      default_profile_image: false,
                      following: false,
                      follow_request_sent: false,
                      notifications: false,
                      translator_type: 'none'
                    }
                  }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 871408030474162200,
              id_str: '871408030474162176',
              name: 'MS Dhoni',
              screen_name: 'MSDhoni85350822',
              location: 'Bengaluru South, India',
              description: "I love my country india💙\n                                            I'm a fan of MS Dhoni and Rajinikanth..💖\n                  👉Pawan kalyan is my Heart💖..",
              url: null,
              entities: { description: { urls: [] } },
              protected: false,
              followers_count: 76,
              friends_count: 381,
              listed_count: 1,
              created_at: 'Sun Jun 04 16:47:19 +0000 2017',
              favourites_count: 3276,
              utc_offset: null,
              time_zone: null,
              geo_enabled: false,
              verified: false,
              statuses_count: 2141,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'F5F8FA',
              profile_background_image_url: null,
              profile_background_image_url_https: null,
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/916849356094844928/i7JSZkxX_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/916849356094844928/i7JSZkxX_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/871408030474162176/1502765044',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 12:03:19 +0000 2017',
              id: 916997430331162600,
              id_str: '916997430331162624',
              text: 'Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
              truncated: false,
              entities: {
                hashtags: [{ text: 'Ziva', indices: [16, 21] }],
                symbols: [],
                user_mentions: [],
                urls: [],
                media: [
                  {
                    id: 916997015497613300,
                    id_str: '916997015497613313',
                    indices: [48, 71],
                    media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    url: 'https://t.co/nzngJRmy81',
                    display_url: 'pic.twitter.com/nzngJRmy81',
                    expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                    type: 'photo',
                    sizes: {
                      medium: { w: 600, h: 330, resize: 'fit' },
                      large: { w: 640, h: 352, resize: 'fit' },
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      small: { w: 340, h: 187, resize: 'fit' }
                    }
                  }
                ]
              },
              extended_entities: {
                media: [
                  {
                    id: 916997015497613300,
                    id_str: '916997015497613313',
                    indices: [48, 71],
                    media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    url: 'https://t.co/nzngJRmy81',
                    display_url: 'pic.twitter.com/nzngJRmy81',
                    expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                    type: 'video',
                    sizes: {
                      medium: { w: 600, h: 330, resize: 'fit' },
                      large: { w: 640, h: 352, resize: 'fit' },
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      small: { w: 340, h: 187, resize: 'fit' }
                    },
                    video_info: {
                      aspect_ratio: [20, 11],
                      duration_millis: 29267,
                      variants: [
                        {
                          bitrate: 320000,
                          content_type: 'video/mp4',
                          url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                        },
                        {
                          content_type: 'application/x-mpegURL',
                          url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                        }
                      ]
                    },
                    additional_media_info: { monetizable: false }
                  }
                ]
              },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 1727522635,
                id_str: '1727522635',
                name: 'DHONIsm ♥',
                screen_name: 'DHONIism',
                location: 'from Tamil Nadu to World :)',
                description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                url: 'https://t.co/VSrp5PXoY5',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/VSrp5PXoY5',
                        expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                        display_url: 'facebook.com/BleedDhonIsm',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: { urls: [] }
                },
                protected: false,
                followers_count: 133889,
                friends_count: 23,
                listed_count: 32,
                created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                favourites_count: 743,
                utc_offset: 19800,
                time_zone: 'New Delhi',
                geo_enabled: true,
                verified: false,
                statuses_count: 7310,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: 'C0DEED',
                profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                profile_background_tile: true,
                profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                profile_link_color: '0084B4',
                profile_sidebar_border_color: 'FFFFFF',
                profile_sidebar_fill_color: 'DDEEF6',
                profile_text_color: '333333',
                profile_use_background_image: true,
                has_extended_profile: true,
                default_profile: false,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 112,
              favorite_count: 309,
              favorited: false,
              retweeted: false,
              possibly_sensitive: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 112,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          }
        ]
      },
      searchStatus: { loaded: false, error: false, errorMsg: '' },
      itemData: { text: '', username: '' }
    },
    { type: 'ADD_SEARCH_STATUS', payload: { loaded: true, error: false } }
  );
  expect(state).toEqual({
    searchTerm: 'dhoni',
    searchData: {
      data: [
        {
          created_at: 'Sun Oct 08 13:29:09 +0000 2017',
          id: 917019033584787500,
          id_str: '917019033584787456',
          text: "CUTE | Virat Kohli having fun with MS Dhoni's daughter Ziva | Must Watch | Virat Fans.: https://t.co/E11Ex214lc via @YouTube",
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              { screen_name: 'YouTube', name: 'YouTube', id: 10228272, id_str: '10228272', indices: [116, 124] }
            ],
            urls: [
              {
                url: 'https://t.co/E11Ex214lc',
                expanded_url: 'http://youtu.be/mtflMTy9r7E?a',
                display_url: 'youtu.be/mtflMTy9r7E?a',
                indices: [88, 111]
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://www.google.com/" rel="nofollow">Google</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 711870517,
            id_str: '711870517',
            name: 'Rockstar',
            screen_name: 'shivamrocks02',
            location: 'India',
            description: 'Just living my dreams.',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 4750,
            friends_count: 490,
            listed_count: 30,
            created_at: 'Mon Jul 23 05:41:19 +0000 2012',
            favourites_count: 24671,
            utc_offset: 19800,
            time_zone: 'New Delhi',
            geo_enabled: false,
            verified: false,
            statuses_count: 49357,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '000000',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme9/bg.gif',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme9/bg.gif',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/790939117039214592/IcLtgmBx_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/790939117039214592/IcLtgmBx_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/711870517/1436525719',
            profile_link_color: '1B95E0',
            profile_sidebar_border_color: '000000',
            profile_sidebar_fill_color: '000000',
            profile_text_color: '000000',
            profile_use_background_image: false,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 0,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:28:47 +0000 2017',
          id: 917018941968539600,
          id_str: '917018941968539648',
          text: 'How Sourav Ganguly played his part in making of the legend of MS Dhoni https://t.co/qVbpmHaM4A',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [],
            urls: [
              {
                url: 'https://t.co/qVbpmHaM4A',
                expanded_url: 'http://ift.tt/2kvt1XM',
                display_url: 'ift.tt/2kvt1XM',
                indices: [71, 94]
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="https://ifttt.com" rel="nofollow">IFTTT</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 178544713,
            id_str: '178544713',
            name: 'NewsStory',
            screen_name: 'NewsStoryIndia',
            location: 'India',
            description: 'Follow us now to get news from more than 100 news channels.No copyright Direct references to news content. Follow Now.\nProudly Made in India.जय हिन्द !! जय भारत',
            url: 'https://t.co/Wtiy0ExqsI',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/Wtiy0ExqsI',
                    expanded_url: 'http://newsstory.webnode.com',
                    display_url: 'newsstory.webnode.com',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 4601,
            friends_count: 28,
            listed_count: 27,
            created_at: 'Sun Aug 15 01:58:36 +0000 2010',
            favourites_count: 789,
            utc_offset: -25200,
            time_zone: 'Pacific Time (US & Canada)',
            geo_enabled: false,
            verified: false,
            statuses_count: 114332,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '000000',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme9/bg.gif',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme9/bg.gif',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/829323773769818113/0Z6sbzum_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/829323773769818113/0Z6sbzum_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/178544713/1475310281',
            profile_link_color: '3B94D9',
            profile_sidebar_border_color: '000000',
            profile_sidebar_fill_color: '000000',
            profile_text_color: '000000',
            profile_use_background_image: false,
            has_extended_profile: false,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 0,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:28:25 +0000 2017',
          id: 917018846690648000,
          id_str: '917018846690648064',
          text: 'RT @DHONIism: VVS Laxman - "Not only in Ranchi or in India, Dhoni will get the loudest cheer in overseas also &amp; he is an absolute Legend of…',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
            ],
            urls: []
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 833203035690192900,
            id_str: '833203035690192896',
            name: 'THE SALMAN KHAN 🔛🔝',
            screen_name: 'SalmanKaStarDom',
            location: 'Under Construction',
            description: "👉 #TIGER  🙏\nSalman Khan's FAN  @BeingSalmanKhan  #Tiger_Zinda_Hai on 22nd Dec 2017. Following Only Salman Khan's Fans",
            url: 'https://t.co/5JUl38Jryy',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/5JUl38Jryy',
                    expanded_url: 'http://SaraJagGhoomeyaLekinInkeJaisaNaKoi.com',
                    display_url: 'SaraJagGhoomeyaLekinInkeJaisaNaKoi.com',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 498,
            friends_count: 203,
            listed_count: 0,
            created_at: 'Sun Feb 19 06:34:18 +0000 2017',
            favourites_count: 8144,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 5880,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/912237357692215296/TTCvH5V4_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/912237357692215296/TTCvH5V4_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/833203035690192896/1506143031',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sat Oct 07 16:53:40 +0000 2017',
            id: 916708115302686700,
            id_str: '916708115302686720',
            text: 'VVS Laxman - "Not only in Ranchi or in India, Dhoni will get the loudest cheer in overseas also &amp; he is an absolute Legend of the game"',
            truncated: false,
            entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 1727522635,
              id_str: '1727522635',
              name: 'DHONIsm ♥',
              screen_name: 'DHONIism',
              location: 'from Tamil Nadu to World :)',
              description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
              url: 'https://t.co/VSrp5PXoY5',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/VSrp5PXoY5',
                      expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                      display_url: 'facebook.com/BleedDhonIsm',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 133889,
              friends_count: 23,
              listed_count: 32,
              created_at: 'Wed Sep 04 03:52:58 +0000 2013',
              favourites_count: 743,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 7310,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_tile: true,
              profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
              profile_link_color: '0084B4',
              profile_sidebar_border_color: 'FFFFFF',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 217,
            favorite_count: 562,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 217,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:28:23 +0000 2017',
          id: 917018841133195300,
          id_str: '917018841133195265',
          text: 'RT @msdfansofficial: His Smile is reason for billions Smile😇\n#Dhoni #INDvAUS https://t.co/vBVso0kX3V',
          truncated: false,
          entities: {
            hashtags: [{ text: 'Dhoni', indices: [61, 67] }, { text: 'INDvAUS', indices: [68, 76] }],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'msdfansofficial',
                name: 'MS Dhoni Fans #Dhoni',
                id: 2962738476,
                id_str: '2962738476',
                indices: [3, 19]
              }
            ],
            urls: [],
            media: [
              {
                id: 916886912534667300,
                id_str: '916886912534667265',
                indices: [77, 100],
                media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                url: 'https://t.co/vBVso0kX3V',
                display_url: 'pic.twitter.com/vBVso0kX3V',
                expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                type: 'photo',
                sizes: {
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 1080, h: 1080, resize: 'fit' },
                  large: { w: 1080, h: 1080, resize: 'fit' },
                  small: { w: 680, h: 680, resize: 'fit' }
                },
                source_status_id: 916886937209675800,
                source_status_id_str: '916886937209675776',
                source_user_id: 2962738476,
                source_user_id_str: '2962738476'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916886912534667300,
                id_str: '916886912534667265',
                indices: [77, 100],
                media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                url: 'https://t.co/vBVso0kX3V',
                display_url: 'pic.twitter.com/vBVso0kX3V',
                expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                type: 'photo',
                sizes: {
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 1080, h: 1080, resize: 'fit' },
                  large: { w: 1080, h: 1080, resize: 'fit' },
                  small: { w: 680, h: 680, resize: 'fit' }
                },
                source_status_id: 916886937209675800,
                source_status_id_str: '916886937209675776',
                source_user_id: 2962738476,
                source_user_id_str: '2962738476'
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Lite</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 821266766341017600,
            id_str: '821266766341017600',
            name: 'Varunmsdian77',
            screen_name: 'Varunmsdian77',
            location: 'Tamilnadu,INDIA',
            description: 'Proud to be an msdian. A big fan of sivakarthikeyanism.',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 18,
            friends_count: 94,
            listed_count: 0,
            created_at: 'Tue Jan 17 08:03:50 +0000 2017',
            favourites_count: 389,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 1024,
            lang: 'en-gb',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: false,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 04:44:15 +0000 2017',
            id: 916886937209675800,
            id_str: '916886937209675776',
            text: 'His Smile is reason for billions Smile😇\n#Dhoni #INDvAUS https://t.co/vBVso0kX3V',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Dhoni', indices: [40, 46] }, { text: 'INDvAUS', indices: [47, 55] }],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916886912534667300,
                  id_str: '916886912534667265',
                  indices: [56, 79],
                  media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  url: 'https://t.co/vBVso0kX3V',
                  display_url: 'pic.twitter.com/vBVso0kX3V',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916886912534667300,
                  id_str: '916886912534667265',
                  indices: [56, 79],
                  media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  url: 'https://t.co/vBVso0kX3V',
                  display_url: 'pic.twitter.com/vBVso0kX3V',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 2962738476,
              id_str: '2962738476',
              name: 'MS Dhoni Fans #Dhoni',
              screen_name: 'msdfansofficial',
              location: 'Ranchi, India',
              description: 'Official Fan Club of Mahendra Singh Dhoni. insights & updates on MS Dhoni. #Dhoni @msdhoni https://t.co/DxND6ychgJ',
              url: 'https://t.co/vIL4WfRXaa',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/vIL4WfRXaa',
                      expanded_url: 'https://www.facebook.com/MSDhoniFansOfficial',
                      display_url: 'facebook.com/MSDhoniFansOff…',
                      indices: [0, 23]
                    }
                  ]
                },
                description: {
                  urls: [
                    {
                      url: 'https://t.co/DxND6ychgJ',
                      expanded_url: 'https://www.instagram.com/msdhonifansofficial/',
                      display_url: 'instagram.com/msdhonifansoff…',
                      indices: [91, 114]
                    }
                  ]
                }
              },
              protected: false,
              followers_count: 37410,
              friends_count: 28,
              listed_count: 24,
              created_at: 'Wed Jan 07 09:42:39 +0000 2015',
              favourites_count: 54,
              utc_offset: 19800,
              time_zone: 'Chennai',
              geo_enabled: true,
              verified: false,
              statuses_count: 5483,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme16/bg.gif',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme16/bg.gif',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/2962738476/1493447487',
              profile_link_color: '73CDF7',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 51,
            favorite_count: 357,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 51,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:28:15 +0000 2017',
          id: 917018808253952000,
          id_str: '917018808253952002',
          text: 'Virat Kohli’s adorable moments with MS Dhoni’s daughter Ziva.. https://t.co/1cQiRsZOff',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [],
            urls: [
              {
                url: 'https://t.co/1cQiRsZOff',
                expanded_url: 'http://indianexpress.com/photos/sports-gallery/virat-kohlis-adorable-moments-with-ms-dhonis-daughter-ziva-pics-4880713/',
                display_url: 'indianexpress.com/photos/sports-…',
                indices: [63, 86]
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://NewsBoss.in" rel="nofollow">NewsBoss.in</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 753259712028696600,
            id_str: '753259712028696576',
            name: 'NewsBoss.in',
            screen_name: 'NewsBossIndia',
            location: '',
            description: 'News, you can choose!',
            url: 'https://t.co/y9fpUd38h3',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/y9fpUd38h3',
                    expanded_url: 'http://NewsBoss.in',
                    display_url: 'NewsBoss.in',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 945,
            friends_count: 1,
            listed_count: 219,
            created_at: 'Wed Jul 13 16:08:05 +0000 2016',
            favourites_count: 1,
            utc_offset: 19800,
            time_zone: 'New Delhi',
            geo_enabled: false,
            verified: false,
            statuses_count: 1175250,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '000000',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/753260679692333057/AS4Xiw4q_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/753260679692333057/AS4Xiw4q_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/753259712028696576/1468426410',
            profile_link_color: 'E81C4F',
            profile_sidebar_border_color: '000000',
            profile_sidebar_fill_color: '000000',
            profile_text_color: '000000',
            profile_use_background_image: false,
            has_extended_profile: false,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 0,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: true,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:54 +0000 2017',
          id: 917018717048913900,
          id_str: '917018717048913920',
          text: 'RT @msdfansofficial: That smile ♥\n#Dhoni #Ranchi #INDvsAUS https://t.co/mGpu18BGw6',
          truncated: false,
          entities: {
            hashtags: [
              { text: 'Dhoni', indices: [34, 40] },
              { text: 'Ranchi', indices: [41, 48] },
              { text: 'INDvsAUS', indices: [49, 58] }
            ],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'msdfansofficial',
                name: 'MS Dhoni Fans #Dhoni',
                id: 2962738476,
                id_str: '2962738476',
                indices: [3, 19]
              }
            ],
            urls: [],
            media: [
              {
                id: 916843458215559200,
                id_str: '916843458215559168',
                indices: [59, 82],
                media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                url: 'https://t.co/mGpu18BGw6',
                display_url: 'pic.twitter.com/mGpu18BGw6',
                expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                type: 'photo',
                sizes: {
                  small: { w: 680, h: 383, resize: 'fit' },
                  medium: { w: 1200, h: 675, resize: 'fit' },
                  large: { w: 1280, h: 720, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' }
                },
                source_status_id: 916843468424601600,
                source_status_id_str: '916843468424601601',
                source_user_id: 2962738476,
                source_user_id_str: '2962738476'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916843458215559200,
                id_str: '916843458215559168',
                indices: [59, 82],
                media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                url: 'https://t.co/mGpu18BGw6',
                display_url: 'pic.twitter.com/mGpu18BGw6',
                expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                type: 'photo',
                sizes: {
                  small: { w: 680, h: 383, resize: 'fit' },
                  medium: { w: 1200, h: 675, resize: 'fit' },
                  large: { w: 1280, h: 720, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' }
                },
                source_status_id: 916843468424601600,
                source_status_id_str: '916843468424601601',
                source_user_id: 2962738476,
                source_user_id_str: '2962738476'
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Lite</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 821266766341017600,
            id_str: '821266766341017600',
            name: 'Varunmsdian77',
            screen_name: 'Varunmsdian77',
            location: 'Tamilnadu,INDIA',
            description: 'Proud to be an msdian. A big fan of sivakarthikeyanism.',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 18,
            friends_count: 94,
            listed_count: 0,
            created_at: 'Tue Jan 17 08:03:50 +0000 2017',
            favourites_count: 389,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 1024,
            lang: 'en-gb',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: false,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 01:51:31 +0000 2017',
            id: 916843468424601600,
            id_str: '916843468424601601',
            text: 'That smile ♥\n#Dhoni #Ranchi #INDvsAUS https://t.co/mGpu18BGw6',
            truncated: false,
            entities: {
              hashtags: [
                { text: 'Dhoni', indices: [13, 19] },
                { text: 'Ranchi', indices: [20, 27] },
                { text: 'INDvsAUS', indices: [28, 37] }
              ],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916843458215559200,
                  id_str: '916843458215559168',
                  indices: [38, 61],
                  media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  url: 'https://t.co/mGpu18BGw6',
                  display_url: 'pic.twitter.com/mGpu18BGw6',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                  type: 'photo',
                  sizes: {
                    small: { w: 680, h: 383, resize: 'fit' },
                    medium: { w: 1200, h: 675, resize: 'fit' },
                    large: { w: 1280, h: 720, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916843458215559200,
                  id_str: '916843458215559168',
                  indices: [38, 61],
                  media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  url: 'https://t.co/mGpu18BGw6',
                  display_url: 'pic.twitter.com/mGpu18BGw6',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                  type: 'photo',
                  sizes: {
                    small: { w: 680, h: 383, resize: 'fit' },
                    medium: { w: 1200, h: 675, resize: 'fit' },
                    large: { w: 1280, h: 720, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' }
                  }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 2962738476,
              id_str: '2962738476',
              name: 'MS Dhoni Fans #Dhoni',
              screen_name: 'msdfansofficial',
              location: 'Ranchi, India',
              description: 'Official Fan Club of Mahendra Singh Dhoni. insights & updates on MS Dhoni. #Dhoni @msdhoni https://t.co/DxND6ychgJ',
              url: 'https://t.co/vIL4WfRXaa',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/vIL4WfRXaa',
                      expanded_url: 'https://www.facebook.com/MSDhoniFansOfficial',
                      display_url: 'facebook.com/MSDhoniFansOff…',
                      indices: [0, 23]
                    }
                  ]
                },
                description: {
                  urls: [
                    {
                      url: 'https://t.co/DxND6ychgJ',
                      expanded_url: 'https://www.instagram.com/msdhonifansofficial/',
                      display_url: 'instagram.com/msdhonifansoff…',
                      indices: [91, 114]
                    }
                  ]
                }
              },
              protected: false,
              followers_count: 37410,
              friends_count: 28,
              listed_count: 24,
              created_at: 'Wed Jan 07 09:42:39 +0000 2015',
              favourites_count: 54,
              utc_offset: 19800,
              time_zone: 'Chennai',
              geo_enabled: true,
              verified: false,
              statuses_count: 5483,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme16/bg.gif',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme16/bg.gif',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/2962738476/1493447487',
              profile_link_color: '73CDF7',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 55,
            favorite_count: 382,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 55,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:44 +0000 2017',
          id: 917018676200579100,
          id_str: '917018676200579073',
          text: "RT @dna: WATCH: Virat Kohli playing with MS Dhoni's daughter Ziva is the cutest thing you'll see today! https://t.co/rsAovpXzIA https://t.c…",
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [{ screen_name: 'dna', name: 'DNA', id: 17710740, id_str: '17710740', indices: [3, 7] }],
            urls: [
              {
                url: 'https://t.co/rsAovpXzIA',
                expanded_url: 'http://dnai.in/f6r2',
                display_url: 'dnai.in/f6r2',
                indices: [104, 127]
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 140739269,
            id_str: '140739269',
            name: 'Shekhar_MUFC',
            screen_name: 'shekharlog',
            location: 'India',
            description: 'Big Sports Enthusiast | In love with @MANUTD | #TeamIndia | @DFB_Team Football | #CR7 | #MSD | Movies | Foodie | F1 | ForceIndia | Proud Indian |',
            url: 'https://t.co/0va3mvrN1I',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/0va3mvrN1I',
                    expanded_url: 'http://www.facebook.com/shekharlog',
                    display_url: 'facebook.com/shekharlog',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 723,
            friends_count: 881,
            listed_count: 20,
            created_at: 'Thu May 06 08:03:02 +0000 2010',
            favourites_count: 710,
            utc_offset: 19800,
            time_zone: 'Kolkata',
            geo_enabled: true,
            verified: false,
            statuses_count: 6600,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'C0DEED',
            profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000064601484/910df8a9d758d0d68b18a0988e629091.jpeg',
            profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000064601484/910df8a9d758d0d68b18a0988e629091.jpeg',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/844618594658996224/0a7Wh_o1_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/844618594658996224/0a7Wh_o1_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/140739269/1448163197',
            profile_link_color: '1281A3',
            profile_sidebar_border_color: 'FFFFFF',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 12:28:11 +0000 2017',
            id: 917003691273494500,
            id_str: '917003691273494528',
            text: "WATCH: Virat Kohli playing with MS Dhoni's daughter Ziva is the cutest thing you'll see today!… https://t.co/SmnHRYH3Pg",
            truncated: true,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [],
              urls: [
                {
                  url: 'https://t.co/SmnHRYH3Pg',
                  expanded_url: 'https://twitter.com/i/web/status/917003691273494528',
                  display_url: 'twitter.com/i/web/status/9…',
                  indices: [96, 119]
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 17710740,
              id_str: '17710740',
              name: 'DNA',
              screen_name: 'dna',
              location: 'India',
              description: 'Follow us for news, photos, videos and the latest trends from India and around the world. http://t.co/IZXefx3rSt',
              url: 'http://t.co/IZXefx3rSt',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'http://t.co/IZXefx3rSt',
                      expanded_url: 'http://www.dnaindia.com',
                      display_url: 'dnaindia.com',
                      indices: [0, 22]
                    }
                  ]
                },
                description: {
                  urls: [
                    {
                      url: 'http://t.co/IZXefx3rSt',
                      expanded_url: 'http://www.dnaindia.com',
                      display_url: 'dnaindia.com',
                      indices: [90, 112]
                    }
                  ]
                }
              },
              protected: false,
              followers_count: 1746066,
              friends_count: 354,
              listed_count: 3445,
              created_at: 'Fri Nov 28 15:39:38 +0000 2008',
              favourites_count: 92,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: false,
              verified: true,
              statuses_count: 414256,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'FFFFFF',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000175778006/yAHZPUM0.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000175778006/yAHZPUM0.jpeg',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/864432203370905601/yWa-6Q9O_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/864432203370905601/yWa-6Q9O_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/17710740/1507174704',
              profile_link_color: '1B95E0',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '542437',
              profile_text_color: 'C02942',
              profile_use_background_image: true,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'regular'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 8,
            favorite_count: 45,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 8,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:43 +0000 2017',
          id: 917018670249009200,
          id_str: '917018670249009153',
          text: 'RT @BrokenCricket: " Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'BrokenCricket',
                name: 'Broken Cricket',
                id: 907619970,
                id_str: '907619970',
                indices: [3, 17]
              }
            ],
            urls: []
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="https://mobile.twitter.com" rel="nofollow">Mobile Web (M2)</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 917018286910345200,
            id_str: '917018286910345218',
            name: 'BUY FOLLO₩ERS :yuk',
            screen_name: 'KilleanTessa',
            location: '',
            description: 'Check the first twěět for the Iiŉk \n\nref:riebfpnb',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 0,
            friends_count: 0,
            listed_count: 0,
            created_at: 'Sun Oct 08 13:26:11 +0000 2017',
            favourites_count: 0,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 279,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/917018585867853825/VzoICPy7_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/917018585867853825/VzoICPy7_normal.jpg',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: false,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 08:34:36 +0000 2017',
            id: 916944908337868800,
            id_str: '916944908337868800',
            text: '" Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
            truncated: false,
            entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 907619970,
              id_str: '907619970',
              name: 'Broken Cricket',
              screen_name: 'BrokenCricket',
              location: '',
              description: 'I was married to Sachin then fell in Love with Kohli now secretly dating AB',
              url: 'https://t.co/FBWn6henPH',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/FBWn6henPH',
                      expanded_url: 'https://www.facebook.com/BrokenCricketofficial/',
                      display_url: 'facebook.com/BrokenCricketo…',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 172513,
              friends_count: 87,
              listed_count: 246,
              created_at: 'Sat Oct 27 08:03:44 +0000 2012',
              favourites_count: 13615,
              utc_offset: 10800,
              time_zone: 'Athens',
              geo_enabled: false,
              verified: false,
              statuses_count: 31679,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/907619970/1498923596',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 363,
            favorite_count: 830,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 363,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:34 +0000 2017',
          id: 917018635352207400,
          id_str: '917018635352207360',
          text: 'RT @officialDhoniFC: These Smiles from our Inspiration, make our Super Sunday. #Dhoni #MSD #Ranchi #IndvAus #Mahi https://t.co/0mDXDrHobe',
          truncated: false,
          entities: {
            hashtags: [
              { text: 'Dhoni', indices: [79, 85] },
              { text: 'MSD', indices: [86, 90] },
              { text: 'Ranchi', indices: [91, 98] },
              { text: 'IndvAus', indices: [99, 107] },
              { text: 'Mahi', indices: [108, 113] }
            ],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'officialDhoniFC',
                name: '#Dhoni #Dhoni FC',
                id: 3019564778,
                id_str: '3019564778',
                indices: [3, 19]
              }
            ],
            urls: [],
            media: [
              {
                id: 916913274330812400,
                id_str: '916913274330812416',
                indices: [114, 137],
                media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                url: 'https://t.co/0mDXDrHobe',
                display_url: 'pic.twitter.com/0mDXDrHobe',
                expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                type: 'photo',
                sizes: {
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 1080, h: 1080, resize: 'fit' },
                  large: { w: 1080, h: 1080, resize: 'fit' },
                  small: { w: 680, h: 680, resize: 'fit' }
                },
                source_status_id: 916913305146474500,
                source_status_id_str: '916913305146474496',
                source_user_id: 1244185244,
                source_user_id_str: '1244185244'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916913274330812400,
                id_str: '916913274330812416',
                indices: [114, 137],
                media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                url: 'https://t.co/0mDXDrHobe',
                display_url: 'pic.twitter.com/0mDXDrHobe',
                expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                type: 'photo',
                sizes: {
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 1080, h: 1080, resize: 'fit' },
                  large: { w: 1080, h: 1080, resize: 'fit' },
                  small: { w: 680, h: 680, resize: 'fit' }
                },
                source_status_id: 916913305146474500,
                source_status_id_str: '916913305146474496',
                source_user_id: 1244185244,
                source_user_id_str: '1244185244'
              },
              {
                id: 916913293846966300,
                id_str: '916913293846966273',
                indices: [114, 137],
                media_url: 'http://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                url: 'https://t.co/0mDXDrHobe',
                display_url: 'pic.twitter.com/0mDXDrHobe',
                expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                type: 'photo',
                sizes: {
                  small: { w: 559, h: 547, resize: 'fit' },
                  large: { w: 559, h: 547, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 559, h: 547, resize: 'fit' }
                },
                source_status_id: 916913305146474500,
                source_status_id_str: '916913305146474496',
                source_user_id: 1244185244,
                source_user_id_str: '1244185244'
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 902940305745338400,
            id_str: '902940305745338369',
            name: 'karthikeyan Palanisa',
            screen_name: 'karthikeyanPa10',
            location: 'Tamil Nadu, India',
            description: 'Sports Cricketers and Commentators Cricketers and Commentators Sports News, TV and Scores Entertainment South Indian Breaking News CEOs Business & CEOs',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 5,
            friends_count: 175,
            listed_count: 0,
            created_at: 'Wed Aug 30 17:05:19 +0000 2017',
            favourites_count: 9,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 344,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/903264169541025792/lF6bzcvg_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/903264169541025792/lF6bzcvg_normal.jpg',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 06:35:05 +0000 2017',
            id: 916914828081582100,
            id_str: '916914828081582080',
            text: 'These Smiles from our Inspiration, make our Super Sunday. #Dhoni #MSD #Ranchi #IndvAus #Mahi https://t.co/0mDXDrHobe',
            truncated: false,
            entities: {
              hashtags: [
                { text: 'Dhoni', indices: [58, 64] },
                { text: 'MSD', indices: [65, 69] },
                { text: 'Ranchi', indices: [70, 77] },
                { text: 'IndvAus', indices: [78, 86] },
                { text: 'Mahi', indices: [87, 92] }
              ],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916913274330812400,
                  id_str: '916913274330812416',
                  indices: [93, 116],
                  media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  url: 'https://t.co/0mDXDrHobe',
                  display_url: 'pic.twitter.com/0mDXDrHobe',
                  expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  },
                  source_status_id: 916913305146474500,
                  source_status_id_str: '916913305146474496',
                  source_user_id: 1244185244,
                  source_user_id_str: '1244185244'
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916913274330812400,
                  id_str: '916913274330812416',
                  indices: [93, 116],
                  media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  url: 'https://t.co/0mDXDrHobe',
                  display_url: 'pic.twitter.com/0mDXDrHobe',
                  expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  },
                  source_status_id: 916913305146474500,
                  source_status_id_str: '916913305146474496',
                  source_user_id: 1244185244,
                  source_user_id_str: '1244185244'
                },
                {
                  id: 916913293846966300,
                  id_str: '916913293846966273',
                  indices: [93, 116],
                  media_url: 'http://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                  url: 'https://t.co/0mDXDrHobe',
                  display_url: 'pic.twitter.com/0mDXDrHobe',
                  expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                  type: 'photo',
                  sizes: {
                    small: { w: 559, h: 547, resize: 'fit' },
                    large: { w: 559, h: 547, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 559, h: 547, resize: 'fit' }
                  },
                  source_status_id: 916913305146474500,
                  source_status_id_str: '916913305146474496',
                  source_user_id: 1244185244,
                  source_user_id_str: '1244185244'
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="https://ifttt.com" rel="nofollow">IFTTT</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 3019564778,
              id_str: '3019564778',
              name: '#Dhoni #Dhoni FC',
              screen_name: 'officialDhoniFC',
              location: 'India √',
              description: '#MsDhoni #Dhoni\r\n#MsDhoni #Dhoni\r\n#MsDhoni #Dhoni\r\nMsDhoni Dhoni\r\n#MsDhoni #Dhoni\r\nMsDhoni Dhoni\r\n#MsDhoni #Dhoni\r\nMsDhoni Dhoni\r\nMsDhoni Dhoni\r\n#Dhoni  #Dhoni',
              url: 'https://t.co/CjQ5gS1lWY',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/CjQ5gS1lWY',
                      expanded_url: 'http://Espncricinfo.com',
                      display_url: 'Espncricinfo.com',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 35745,
              friends_count: 25,
              listed_count: 76,
              created_at: 'Sat Feb 14 11:51:57 +0000 2015',
              favourites_count: 1091,
              utc_offset: 18000,
              time_zone: 'Karachi',
              geo_enabled: false,
              verified: false,
              statuses_count: 26152,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/911771392013688832/tZEKmYJa_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/911771392013688832/tZEKmYJa_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/3019564778/1506218219',
              profile_link_color: 'FA743E',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 2,
            favorite_count: 10,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 2,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:16 +0000 2017',
          id: 917018558093156400,
          id_str: '917018558093156352',
          text: 'RT @DHONIism: Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
          truncated: false,
          entities: {
            hashtags: [{ text: 'Ziva', indices: [30, 35] }],
            symbols: [],
            user_mentions: [
              { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
            ],
            urls: [],
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'photo',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'video',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635',
                video_info: {
                  aspect_ratio: [20, 11],
                  duration_millis: 29267,
                  variants: [
                    {
                      bitrate: 320000,
                      content_type: 'video/mp4',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                    },
                    {
                      content_type: 'application/x-mpegURL',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                    }
                  ]
                },
                additional_media_info: {
                  monetizable: false,
                  source_user: {
                    id: 1727522635,
                    id_str: '1727522635',
                    name: 'DHONIsm ♥',
                    screen_name: 'DHONIism',
                    location: 'from Tamil Nadu to World :)',
                    description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                    url: 'https://t.co/VSrp5PXoY5',
                    entities: {
                      url: {
                        urls: [
                          {
                            url: 'https://t.co/VSrp5PXoY5',
                            expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                            display_url: 'facebook.com/BleedDhonIsm',
                            indices: [0, 23]
                          }
                        ]
                      },
                      description: { urls: [] }
                    },
                    protected: false,
                    followers_count: 133889,
                    friends_count: 23,
                    listed_count: 32,
                    created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                    favourites_count: 743,
                    utc_offset: 19800,
                    time_zone: 'New Delhi',
                    geo_enabled: true,
                    verified: false,
                    statuses_count: 7310,
                    lang: 'en',
                    contributors_enabled: false,
                    is_translator: false,
                    is_translation_enabled: false,
                    profile_background_color: 'C0DEED',
                    profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_tile: true,
                    profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                    profile_link_color: '0084B4',
                    profile_sidebar_border_color: 'FFFFFF',
                    profile_sidebar_fill_color: 'DDEEF6',
                    profile_text_color: '333333',
                    profile_use_background_image: true,
                    has_extended_profile: true,
                    default_profile: false,
                    default_profile_image: false,
                    following: false,
                    follow_request_sent: false,
                    notifications: false,
                    translator_type: 'none'
                  }
                }
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 585334504,
            id_str: '585334504',
            name: 'Mersal Bharath',
            screen_name: 'BharathTinz',
            location: 'Chennai, India',
            description: 'Thalapathy Veriyan! 😎😎😍 MSDian! ❤❤❤❤ Amateur photographer. 😁😝  Co-founder and Director of Photography : @sutta_vada',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 323,
            friends_count: 300,
            listed_count: 6,
            created_at: 'Sun May 20 03:44:18 +0000 2012',
            favourites_count: 63493,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 26125,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'C0DEED',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/916934292697104384/eKW4W9C1_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/916934292697104384/eKW4W9C1_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/585334504/1507449149',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 12:03:19 +0000 2017',
            id: 916997430331162600,
            id_str: '916997430331162624',
            text: 'Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Ziva', indices: [16, 21] }],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'photo',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'video',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  video_info: {
                    aspect_ratio: [20, 11],
                    duration_millis: 29267,
                    variants: [
                      {
                        bitrate: 320000,
                        content_type: 'video/mp4',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                      },
                      {
                        content_type: 'application/x-mpegURL',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                      }
                    ]
                  },
                  additional_media_info: { monetizable: false }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 1727522635,
              id_str: '1727522635',
              name: 'DHONIsm ♥',
              screen_name: 'DHONIism',
              location: 'from Tamil Nadu to World :)',
              description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
              url: 'https://t.co/VSrp5PXoY5',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/VSrp5PXoY5',
                      expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                      display_url: 'facebook.com/BleedDhonIsm',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 133889,
              friends_count: 23,
              listed_count: 32,
              created_at: 'Wed Sep 04 03:52:58 +0000 2013',
              favourites_count: 743,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 7310,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_tile: true,
              profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
              profile_link_color: '0084B4',
              profile_sidebar_border_color: 'FFFFFF',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 112,
            favorite_count: 309,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 112,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:26:59 +0000 2017',
          id: 917018488534732800,
          id_str: '917018488534732805',
          text: 'RT @BrokenCricket: " Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'BrokenCricket',
                name: 'Broken Cricket',
                id: 907619970,
                id_str: '907619970',
                indices: [3, 17]
              }
            ],
            urls: []
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 144089436,
            id_str: '144089436',
            name: 'Jegan',
            screen_name: 'IamJegan',
            location: 'Tuticorin / Trichy / Chennai',
            description: 'A Big Fanatic of @SGanguly99. Want him to Coach Team India & Lift the World Cup! Thala Ajith Addict!',
            url: 'https://t.co/lyD9bn1TXG',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/lyD9bn1TXG',
                    expanded_url: 'http://thecineket.com',
                    display_url: 'thecineket.com',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 3270,
            friends_count: 281,
            listed_count: 15,
            created_at: 'Sat May 15 07:56:02 +0000 2010',
            favourites_count: 778,
            utc_offset: 19800,
            time_zone: 'Chennai',
            geo_enabled: true,
            verified: false,
            statuses_count: 31673,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '352726',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme5/bg.gif',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme5/bg.gif',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/906201523725623296/pHeFZ-tQ_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/906201523725623296/pHeFZ-tQ_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/144089436/1436104530',
            profile_link_color: 'D02B55',
            profile_sidebar_border_color: '829D5E',
            profile_sidebar_fill_color: '99CC33',
            profile_text_color: '3E4415',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 08:34:36 +0000 2017',
            id: 916944908337868800,
            id_str: '916944908337868800',
            text: '" Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
            truncated: false,
            entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 907619970,
              id_str: '907619970',
              name: 'Broken Cricket',
              screen_name: 'BrokenCricket',
              location: '',
              description: 'I was married to Sachin then fell in Love with Kohli now secretly dating AB',
              url: 'https://t.co/FBWn6henPH',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/FBWn6henPH',
                      expanded_url: 'https://www.facebook.com/BrokenCricketofficial/',
                      display_url: 'facebook.com/BrokenCricketo…',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 172513,
              friends_count: 87,
              listed_count: 246,
              created_at: 'Sat Oct 27 08:03:44 +0000 2012',
              favourites_count: 13615,
              utc_offset: 10800,
              time_zone: 'Athens',
              geo_enabled: false,
              verified: false,
              statuses_count: 31679,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/907619970/1498923596',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 363,
            favorite_count: 830,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 363,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:26:34 +0000 2017',
          id: 917018382884495400,
          id_str: '917018382884495360',
          text: 'RT @DHONIism: Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
          truncated: false,
          entities: {
            hashtags: [{ text: 'Ziva', indices: [30, 35] }],
            symbols: [],
            user_mentions: [
              { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
            ],
            urls: [],
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'photo',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'video',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635',
                video_info: {
                  aspect_ratio: [20, 11],
                  duration_millis: 29267,
                  variants: [
                    {
                      bitrate: 320000,
                      content_type: 'video/mp4',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                    },
                    {
                      content_type: 'application/x-mpegURL',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                    }
                  ]
                },
                additional_media_info: {
                  monetizable: false,
                  source_user: {
                    id: 1727522635,
                    id_str: '1727522635',
                    name: 'DHONIsm ♥',
                    screen_name: 'DHONIism',
                    location: 'from Tamil Nadu to World :)',
                    description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                    url: 'https://t.co/VSrp5PXoY5',
                    entities: {
                      url: {
                        urls: [
                          {
                            url: 'https://t.co/VSrp5PXoY5',
                            expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                            display_url: 'facebook.com/BleedDhonIsm',
                            indices: [0, 23]
                          }
                        ]
                      },
                      description: { urls: [] }
                    },
                    protected: false,
                    followers_count: 133889,
                    friends_count: 23,
                    listed_count: 32,
                    created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                    favourites_count: 743,
                    utc_offset: 19800,
                    time_zone: 'New Delhi',
                    geo_enabled: true,
                    verified: false,
                    statuses_count: 7310,
                    lang: 'en',
                    contributors_enabled: false,
                    is_translator: false,
                    is_translation_enabled: false,
                    profile_background_color: 'C0DEED',
                    profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_tile: true,
                    profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                    profile_link_color: '0084B4',
                    profile_sidebar_border_color: 'FFFFFF',
                    profile_sidebar_fill_color: 'DDEEF6',
                    profile_text_color: '333333',
                    profile_use_background_image: true,
                    has_extended_profile: true,
                    default_profile: false,
                    default_profile_image: false,
                    following: false,
                    follow_request_sent: false,
                    notifications: false,
                    translator_type: 'none'
                  }
                }
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 3174923622,
            id_str: '3174923622',
            name: 'Aяνιηтн',
            screen_name: 'ArvinthVj',
            location: 'Erode, India',
            description: 'சராசரி இந்திய ப்ரஜை || Mech || Cine | Tech freak\n|| A man in search is the Man Indeed || Proud Gixxeriann😎',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 5112,
            friends_count: 465,
            listed_count: 22,
            created_at: 'Sun Apr 26 05:37:28 +0000 2015',
            favourites_count: 16446,
            utc_offset: 19800,
            time_zone: 'New Delhi',
            geo_enabled: true,
            verified: false,
            statuses_count: 28355,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '642D8B',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme10/bg.gif',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme10/bg.gif',
            profile_background_tile: true,
            profile_image_url: 'http://pbs.twimg.com/profile_images/911612405133615104/Lmh9E_-S_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/911612405133615104/Lmh9E_-S_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/3174923622/1505735402',
            profile_link_color: 'FF0000',
            profile_sidebar_border_color: '65B0DA',
            profile_sidebar_fill_color: '7AC3EE',
            profile_text_color: '3D1957',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 12:03:19 +0000 2017',
            id: 916997430331162600,
            id_str: '916997430331162624',
            text: 'Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Ziva', indices: [16, 21] }],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'photo',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'video',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  video_info: {
                    aspect_ratio: [20, 11],
                    duration_millis: 29267,
                    variants: [
                      {
                        bitrate: 320000,
                        content_type: 'video/mp4',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                      },
                      {
                        content_type: 'application/x-mpegURL',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                      }
                    ]
                  },
                  additional_media_info: { monetizable: false }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 1727522635,
              id_str: '1727522635',
              name: 'DHONIsm ♥',
              screen_name: 'DHONIism',
              location: 'from Tamil Nadu to World :)',
              description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
              url: 'https://t.co/VSrp5PXoY5',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/VSrp5PXoY5',
                      expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                      display_url: 'facebook.com/BleedDhonIsm',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 133889,
              friends_count: 23,
              listed_count: 32,
              created_at: 'Wed Sep 04 03:52:58 +0000 2013',
              favourites_count: 743,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 7310,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_tile: true,
              profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
              profile_link_color: '0084B4',
              profile_sidebar_border_color: 'FFFFFF',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 112,
            favorite_count: 309,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 112,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:26:30 +0000 2017',
          id: 917018367281655800,
          id_str: '917018367281655808',
          text: 'RT @FirstCric: "Had Sourav Ganguly not promoted Dhoni to No 3, he wouldn’t have become such a great player," says Virender Sehwag\nhttps://t…',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'FirstCric',
                name: 'FirstCricket',
                id: 888369388906135600,
                id_str: '888369388906135552',
                indices: [3, 13]
              }
            ],
            urls: []
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 1348006476,
            id_str: '1348006476',
            name: 'A',
            screen_name: 'Arijitme',
            location: 'India',
            description: '#Believeinyourself#NeverGiveup inlife#Entrepreneur#Dreamer#Achiever#Chelsea#Moviebuff#PremierLeague.. Events - DM for Enquiries',
            url: 'https://t.co/SE8gkxhOkj',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/SE8gkxhOkj',
                    expanded_url: 'https://movewanderlust.com',
                    display_url: 'movewanderlust.com',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 132,
            friends_count: 197,
            listed_count: 10,
            created_at: 'Sat Apr 13 00:26:28 +0000 2013',
            favourites_count: 2730,
            utc_offset: 19800,
            time_zone: 'New Delhi',
            geo_enabled: true,
            verified: false,
            statuses_count: 6076,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '022330',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme15/bg.png',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme15/bg.png',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/908981012352212992/Vf0kJ9Ha_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/908981012352212992/Vf0kJ9Ha_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/1348006476/1498468283',
            profile_link_color: '0084B4',
            profile_sidebar_border_color: 'A8C7F7',
            profile_sidebar_fill_color: 'C0DFEC',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 13:21:10 +0000 2017',
            id: 917017025662263300,
            id_str: '917017025662263296',
            text: '"Had Sourav Ganguly not promoted Dhoni to No 3, he wouldn’t have become such a great player," says Virender Sehwag\nhttps://t.co/FIANVgKeRI',
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [],
              urls: [
                {
                  url: 'https://t.co/FIANVgKeRI',
                  expanded_url: 'http://www.firstpost.com/firstcricket/sports-news/sourav-ganguly-sacrificed-his-batting-spot-to-make-ms-dhoni-a-great-player-says-virender-sehwag-4121625.html',
                  display_url: 'firstpost.com/firstcricket/s…',
                  indices: [115, 138]
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="https://about.twitter.com/products/tweetdeck" rel="nofollow">TweetDeck</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 888369388906135600,
              id_str: '888369388906135552',
              name: 'FirstCricket',
              screen_name: 'FirstCric',
              location: '',
              description: 'Bringing you live updates, breaking news, opinions and photos from the world of cricket',
              url: 'https://t.co/X7UPznamYz',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/X7UPznamYz',
                      expanded_url: 'http://www.firstpost.com/firstcricket/',
                      display_url: 'firstpost.com/firstcricket/',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 603,
              friends_count: 47,
              listed_count: 9,
              created_at: 'Fri Jul 21 12:05:42 +0000 2017',
              favourites_count: 0,
              utc_offset: -25200,
              time_zone: 'Pacific Time (US & Canada)',
              geo_enabled: false,
              verified: false,
              statuses_count: 3114,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/888370591685726208/Jr6laI3X_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/888370591685726208/Jr6laI3X_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/888369388906135552/1502726156',
              profile_link_color: 'A6CE39',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 3,
            favorite_count: 2,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 3,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:25:55 +0000 2017',
          id: 917018217792417800,
          id_str: '917018217792417792',
          text: 'RT @DHONIism: Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
          truncated: false,
          entities: {
            hashtags: [{ text: 'Ziva', indices: [30, 35] }],
            symbols: [],
            user_mentions: [
              { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
            ],
            urls: [],
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'photo',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'video',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635',
                video_info: {
                  aspect_ratio: [20, 11],
                  duration_millis: 29267,
                  variants: [
                    {
                      bitrate: 320000,
                      content_type: 'video/mp4',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                    },
                    {
                      content_type: 'application/x-mpegURL',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                    }
                  ]
                },
                additional_media_info: {
                  monetizable: false,
                  source_user: {
                    id: 1727522635,
                    id_str: '1727522635',
                    name: 'DHONIsm ♥',
                    screen_name: 'DHONIism',
                    location: 'from Tamil Nadu to World :)',
                    description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                    url: 'https://t.co/VSrp5PXoY5',
                    entities: {
                      url: {
                        urls: [
                          {
                            url: 'https://t.co/VSrp5PXoY5',
                            expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                            display_url: 'facebook.com/BleedDhonIsm',
                            indices: [0, 23]
                          }
                        ]
                      },
                      description: { urls: [] }
                    },
                    protected: false,
                    followers_count: 133889,
                    friends_count: 23,
                    listed_count: 32,
                    created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                    favourites_count: 743,
                    utc_offset: 19800,
                    time_zone: 'New Delhi',
                    geo_enabled: true,
                    verified: false,
                    statuses_count: 7310,
                    lang: 'en',
                    contributors_enabled: false,
                    is_translator: false,
                    is_translation_enabled: false,
                    profile_background_color: 'C0DEED',
                    profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_tile: true,
                    profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                    profile_link_color: '0084B4',
                    profile_sidebar_border_color: 'FFFFFF',
                    profile_sidebar_fill_color: 'DDEEF6',
                    profile_text_color: '333333',
                    profile_use_background_image: true,
                    has_extended_profile: true,
                    default_profile: false,
                    default_profile_image: false,
                    following: false,
                    follow_request_sent: false,
                    notifications: false,
                    translator_type: 'none'
                  }
                }
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 871408030474162200,
            id_str: '871408030474162176',
            name: 'MS Dhoni',
            screen_name: 'MSDhoni85350822',
            location: 'Bengaluru South, India',
            description: "I love my country india💙\n                                            I'm a fan of MS Dhoni and Rajinikanth..💖\n                  👉Pawan kalyan is my Heart💖..",
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 76,
            friends_count: 381,
            listed_count: 1,
            created_at: 'Sun Jun 04 16:47:19 +0000 2017',
            favourites_count: 3276,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 2141,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/916849356094844928/i7JSZkxX_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/916849356094844928/i7JSZkxX_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/871408030474162176/1502765044',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 12:03:19 +0000 2017',
            id: 916997430331162600,
            id_str: '916997430331162624',
            text: 'Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Ziva', indices: [16, 21] }],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'photo',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'video',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  video_info: {
                    aspect_ratio: [20, 11],
                    duration_millis: 29267,
                    variants: [
                      {
                        bitrate: 320000,
                        content_type: 'video/mp4',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                      },
                      {
                        content_type: 'application/x-mpegURL',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                      }
                    ]
                  },
                  additional_media_info: { monetizable: false }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 1727522635,
              id_str: '1727522635',
              name: 'DHONIsm ♥',
              screen_name: 'DHONIism',
              location: 'from Tamil Nadu to World :)',
              description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
              url: 'https://t.co/VSrp5PXoY5',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/VSrp5PXoY5',
                      expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                      display_url: 'facebook.com/BleedDhonIsm',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 133889,
              friends_count: 23,
              listed_count: 32,
              created_at: 'Wed Sep 04 03:52:58 +0000 2013',
              favourites_count: 743,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 7310,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_tile: true,
              profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
              profile_link_color: '0084B4',
              profile_sidebar_border_color: 'FFFFFF',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 112,
            favorite_count: 309,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 112,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        }
      ]
    },
    searchStatus: { loaded: true, error: false, errorMsg: '' },
    itemData: { text: '', username: '' }
  });
});
test('ADD_SEARCH_DATA', () => {
  let state;
  state = reducers(
    {
      searchTerm: 'dhoni',
      searchData: {
        data: []
      },
      searchStatus: { loaded: false, error: false, errorMsg: '' },
      itemData: { text: '', username: '' }
    },
    {
      type: 'ADD_SEARCH_DATA',
      payload: [
        {
          created_at: 'Sun Oct 08 13:29:09 +0000 2017',
          id: 917019033584787500,
          id_str: '917019033584787456',
          text: "CUTE | Virat Kohli having fun with MS Dhoni's daughter Ziva | Must Watch | Virat Fans.: https://t.co/E11Ex214lc via @YouTube",
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              { screen_name: 'YouTube', name: 'YouTube', id: 10228272, id_str: '10228272', indices: [116, 124] }
            ],
            urls: [
              {
                url: 'https://t.co/E11Ex214lc',
                expanded_url: 'http://youtu.be/mtflMTy9r7E?a',
                display_url: 'youtu.be/mtflMTy9r7E?a',
                indices: [88, 111]
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://www.google.com/" rel="nofollow">Google</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 711870517,
            id_str: '711870517',
            name: 'Rockstar',
            screen_name: 'shivamrocks02',
            location: 'India',
            description: 'Just living my dreams.',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 4750,
            friends_count: 490,
            listed_count: 30,
            created_at: 'Mon Jul 23 05:41:19 +0000 2012',
            favourites_count: 24671,
            utc_offset: 19800,
            time_zone: 'New Delhi',
            geo_enabled: false,
            verified: false,
            statuses_count: 49357,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '000000',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme9/bg.gif',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme9/bg.gif',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/790939117039214592/IcLtgmBx_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/790939117039214592/IcLtgmBx_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/711870517/1436525719',
            profile_link_color: '1B95E0',
            profile_sidebar_border_color: '000000',
            profile_sidebar_fill_color: '000000',
            profile_text_color: '000000',
            profile_use_background_image: false,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 0,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:28:47 +0000 2017',
          id: 917018941968539600,
          id_str: '917018941968539648',
          text: 'How Sourav Ganguly played his part in making of the legend of MS Dhoni https://t.co/qVbpmHaM4A',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [],
            urls: [
              {
                url: 'https://t.co/qVbpmHaM4A',
                expanded_url: 'http://ift.tt/2kvt1XM',
                display_url: 'ift.tt/2kvt1XM',
                indices: [71, 94]
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="https://ifttt.com" rel="nofollow">IFTTT</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 178544713,
            id_str: '178544713',
            name: 'NewsStory',
            screen_name: 'NewsStoryIndia',
            location: 'India',
            description: 'Follow us now to get news from more than 100 news channels.No copyright Direct references to news content. Follow Now.\nProudly Made in India.जय हिन्द !! जय भारत',
            url: 'https://t.co/Wtiy0ExqsI',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/Wtiy0ExqsI',
                    expanded_url: 'http://newsstory.webnode.com',
                    display_url: 'newsstory.webnode.com',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 4601,
            friends_count: 28,
            listed_count: 27,
            created_at: 'Sun Aug 15 01:58:36 +0000 2010',
            favourites_count: 789,
            utc_offset: -25200,
            time_zone: 'Pacific Time (US & Canada)',
            geo_enabled: false,
            verified: false,
            statuses_count: 114332,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '000000',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme9/bg.gif',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme9/bg.gif',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/829323773769818113/0Z6sbzum_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/829323773769818113/0Z6sbzum_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/178544713/1475310281',
            profile_link_color: '3B94D9',
            profile_sidebar_border_color: '000000',
            profile_sidebar_fill_color: '000000',
            profile_text_color: '000000',
            profile_use_background_image: false,
            has_extended_profile: false,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 0,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:28:25 +0000 2017',
          id: 917018846690648000,
          id_str: '917018846690648064',
          text: 'RT @DHONIism: VVS Laxman - "Not only in Ranchi or in India, Dhoni will get the loudest cheer in overseas also &amp; he is an absolute Legend of…',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
            ],
            urls: []
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 833203035690192900,
            id_str: '833203035690192896',
            name: 'THE SALMAN KHAN 🔛🔝',
            screen_name: 'SalmanKaStarDom',
            location: 'Under Construction',
            description: "👉 #TIGER  🙏\nSalman Khan's FAN  @BeingSalmanKhan  #Tiger_Zinda_Hai on 22nd Dec 2017. Following Only Salman Khan's Fans",
            url: 'https://t.co/5JUl38Jryy',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/5JUl38Jryy',
                    expanded_url: 'http://SaraJagGhoomeyaLekinInkeJaisaNaKoi.com',
                    display_url: 'SaraJagGhoomeyaLekinInkeJaisaNaKoi.com',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 498,
            friends_count: 203,
            listed_count: 0,
            created_at: 'Sun Feb 19 06:34:18 +0000 2017',
            favourites_count: 8144,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 5880,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/912237357692215296/TTCvH5V4_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/912237357692215296/TTCvH5V4_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/833203035690192896/1506143031',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sat Oct 07 16:53:40 +0000 2017',
            id: 916708115302686700,
            id_str: '916708115302686720',
            text: 'VVS Laxman - "Not only in Ranchi or in India, Dhoni will get the loudest cheer in overseas also &amp; he is an absolute Legend of the game"',
            truncated: false,
            entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 1727522635,
              id_str: '1727522635',
              name: 'DHONIsm ♥',
              screen_name: 'DHONIism',
              location: 'from Tamil Nadu to World :)',
              description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
              url: 'https://t.co/VSrp5PXoY5',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/VSrp5PXoY5',
                      expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                      display_url: 'facebook.com/BleedDhonIsm',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 133889,
              friends_count: 23,
              listed_count: 32,
              created_at: 'Wed Sep 04 03:52:58 +0000 2013',
              favourites_count: 743,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 7310,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_tile: true,
              profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
              profile_link_color: '0084B4',
              profile_sidebar_border_color: 'FFFFFF',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 217,
            favorite_count: 562,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 217,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:28:23 +0000 2017',
          id: 917018841133195300,
          id_str: '917018841133195265',
          text: 'RT @msdfansofficial: His Smile is reason for billions Smile😇\n#Dhoni #INDvAUS https://t.co/vBVso0kX3V',
          truncated: false,
          entities: {
            hashtags: [{ text: 'Dhoni', indices: [61, 67] }, { text: 'INDvAUS', indices: [68, 76] }],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'msdfansofficial',
                name: 'MS Dhoni Fans #Dhoni',
                id: 2962738476,
                id_str: '2962738476',
                indices: [3, 19]
              }
            ],
            urls: [],
            media: [
              {
                id: 916886912534667300,
                id_str: '916886912534667265',
                indices: [77, 100],
                media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                url: 'https://t.co/vBVso0kX3V',
                display_url: 'pic.twitter.com/vBVso0kX3V',
                expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                type: 'photo',
                sizes: {
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 1080, h: 1080, resize: 'fit' },
                  large: { w: 1080, h: 1080, resize: 'fit' },
                  small: { w: 680, h: 680, resize: 'fit' }
                },
                source_status_id: 916886937209675800,
                source_status_id_str: '916886937209675776',
                source_user_id: 2962738476,
                source_user_id_str: '2962738476'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916886912534667300,
                id_str: '916886912534667265',
                indices: [77, 100],
                media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                url: 'https://t.co/vBVso0kX3V',
                display_url: 'pic.twitter.com/vBVso0kX3V',
                expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                type: 'photo',
                sizes: {
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 1080, h: 1080, resize: 'fit' },
                  large: { w: 1080, h: 1080, resize: 'fit' },
                  small: { w: 680, h: 680, resize: 'fit' }
                },
                source_status_id: 916886937209675800,
                source_status_id_str: '916886937209675776',
                source_user_id: 2962738476,
                source_user_id_str: '2962738476'
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Lite</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 821266766341017600,
            id_str: '821266766341017600',
            name: 'Varunmsdian77',
            screen_name: 'Varunmsdian77',
            location: 'Tamilnadu,INDIA',
            description: 'Proud to be an msdian. A big fan of sivakarthikeyanism.',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 18,
            friends_count: 94,
            listed_count: 0,
            created_at: 'Tue Jan 17 08:03:50 +0000 2017',
            favourites_count: 389,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 1024,
            lang: 'en-gb',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: false,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 04:44:15 +0000 2017',
            id: 916886937209675800,
            id_str: '916886937209675776',
            text: 'His Smile is reason for billions Smile😇\n#Dhoni #INDvAUS https://t.co/vBVso0kX3V',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Dhoni', indices: [40, 46] }, { text: 'INDvAUS', indices: [47, 55] }],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916886912534667300,
                  id_str: '916886912534667265',
                  indices: [56, 79],
                  media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  url: 'https://t.co/vBVso0kX3V',
                  display_url: 'pic.twitter.com/vBVso0kX3V',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916886912534667300,
                  id_str: '916886912534667265',
                  indices: [56, 79],
                  media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  url: 'https://t.co/vBVso0kX3V',
                  display_url: 'pic.twitter.com/vBVso0kX3V',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 2962738476,
              id_str: '2962738476',
              name: 'MS Dhoni Fans #Dhoni',
              screen_name: 'msdfansofficial',
              location: 'Ranchi, India',
              description: 'Official Fan Club of Mahendra Singh Dhoni. insights & updates on MS Dhoni. #Dhoni @msdhoni https://t.co/DxND6ychgJ',
              url: 'https://t.co/vIL4WfRXaa',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/vIL4WfRXaa',
                      expanded_url: 'https://www.facebook.com/MSDhoniFansOfficial',
                      display_url: 'facebook.com/MSDhoniFansOff…',
                      indices: [0, 23]
                    }
                  ]
                },
                description: {
                  urls: [
                    {
                      url: 'https://t.co/DxND6ychgJ',
                      expanded_url: 'https://www.instagram.com/msdhonifansofficial/',
                      display_url: 'instagram.com/msdhonifansoff…',
                      indices: [91, 114]
                    }
                  ]
                }
              },
              protected: false,
              followers_count: 37410,
              friends_count: 28,
              listed_count: 24,
              created_at: 'Wed Jan 07 09:42:39 +0000 2015',
              favourites_count: 54,
              utc_offset: 19800,
              time_zone: 'Chennai',
              geo_enabled: true,
              verified: false,
              statuses_count: 5483,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme16/bg.gif',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme16/bg.gif',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/2962738476/1493447487',
              profile_link_color: '73CDF7',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 51,
            favorite_count: 357,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 51,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:28:15 +0000 2017',
          id: 917018808253952000,
          id_str: '917018808253952002',
          text: 'Virat Kohli’s adorable moments with MS Dhoni’s daughter Ziva.. https://t.co/1cQiRsZOff',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [],
            urls: [
              {
                url: 'https://t.co/1cQiRsZOff',
                expanded_url: 'http://indianexpress.com/photos/sports-gallery/virat-kohlis-adorable-moments-with-ms-dhonis-daughter-ziva-pics-4880713/',
                display_url: 'indianexpress.com/photos/sports-…',
                indices: [63, 86]
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://NewsBoss.in" rel="nofollow">NewsBoss.in</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 753259712028696600,
            id_str: '753259712028696576',
            name: 'NewsBoss.in',
            screen_name: 'NewsBossIndia',
            location: '',
            description: 'News, you can choose!',
            url: 'https://t.co/y9fpUd38h3',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/y9fpUd38h3',
                    expanded_url: 'http://NewsBoss.in',
                    display_url: 'NewsBoss.in',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 945,
            friends_count: 1,
            listed_count: 219,
            created_at: 'Wed Jul 13 16:08:05 +0000 2016',
            favourites_count: 1,
            utc_offset: 19800,
            time_zone: 'New Delhi',
            geo_enabled: false,
            verified: false,
            statuses_count: 1175250,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '000000',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/753260679692333057/AS4Xiw4q_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/753260679692333057/AS4Xiw4q_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/753259712028696576/1468426410',
            profile_link_color: 'E81C4F',
            profile_sidebar_border_color: '000000',
            profile_sidebar_fill_color: '000000',
            profile_text_color: '000000',
            profile_use_background_image: false,
            has_extended_profile: false,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 0,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: true,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:54 +0000 2017',
          id: 917018717048913900,
          id_str: '917018717048913920',
          text: 'RT @msdfansofficial: That smile ♥\n#Dhoni #Ranchi #INDvsAUS https://t.co/mGpu18BGw6',
          truncated: false,
          entities: {
            hashtags: [
              { text: 'Dhoni', indices: [34, 40] },
              { text: 'Ranchi', indices: [41, 48] },
              { text: 'INDvsAUS', indices: [49, 58] }
            ],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'msdfansofficial',
                name: 'MS Dhoni Fans #Dhoni',
                id: 2962738476,
                id_str: '2962738476',
                indices: [3, 19]
              }
            ],
            urls: [],
            media: [
              {
                id: 916843458215559200,
                id_str: '916843458215559168',
                indices: [59, 82],
                media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                url: 'https://t.co/mGpu18BGw6',
                display_url: 'pic.twitter.com/mGpu18BGw6',
                expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                type: 'photo',
                sizes: {
                  small: { w: 680, h: 383, resize: 'fit' },
                  medium: { w: 1200, h: 675, resize: 'fit' },
                  large: { w: 1280, h: 720, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' }
                },
                source_status_id: 916843468424601600,
                source_status_id_str: '916843468424601601',
                source_user_id: 2962738476,
                source_user_id_str: '2962738476'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916843458215559200,
                id_str: '916843458215559168',
                indices: [59, 82],
                media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                url: 'https://t.co/mGpu18BGw6',
                display_url: 'pic.twitter.com/mGpu18BGw6',
                expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                type: 'photo',
                sizes: {
                  small: { w: 680, h: 383, resize: 'fit' },
                  medium: { w: 1200, h: 675, resize: 'fit' },
                  large: { w: 1280, h: 720, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' }
                },
                source_status_id: 916843468424601600,
                source_status_id_str: '916843468424601601',
                source_user_id: 2962738476,
                source_user_id_str: '2962738476'
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Lite</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 821266766341017600,
            id_str: '821266766341017600',
            name: 'Varunmsdian77',
            screen_name: 'Varunmsdian77',
            location: 'Tamilnadu,INDIA',
            description: 'Proud to be an msdian. A big fan of sivakarthikeyanism.',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 18,
            friends_count: 94,
            listed_count: 0,
            created_at: 'Tue Jan 17 08:03:50 +0000 2017',
            favourites_count: 389,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 1024,
            lang: 'en-gb',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: false,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 01:51:31 +0000 2017',
            id: 916843468424601600,
            id_str: '916843468424601601',
            text: 'That smile ♥\n#Dhoni #Ranchi #INDvsAUS https://t.co/mGpu18BGw6',
            truncated: false,
            entities: {
              hashtags: [
                { text: 'Dhoni', indices: [13, 19] },
                { text: 'Ranchi', indices: [20, 27] },
                { text: 'INDvsAUS', indices: [28, 37] }
              ],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916843458215559200,
                  id_str: '916843458215559168',
                  indices: [38, 61],
                  media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  url: 'https://t.co/mGpu18BGw6',
                  display_url: 'pic.twitter.com/mGpu18BGw6',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                  type: 'photo',
                  sizes: {
                    small: { w: 680, h: 383, resize: 'fit' },
                    medium: { w: 1200, h: 675, resize: 'fit' },
                    large: { w: 1280, h: 720, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916843458215559200,
                  id_str: '916843458215559168',
                  indices: [38, 61],
                  media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  url: 'https://t.co/mGpu18BGw6',
                  display_url: 'pic.twitter.com/mGpu18BGw6',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                  type: 'photo',
                  sizes: {
                    small: { w: 680, h: 383, resize: 'fit' },
                    medium: { w: 1200, h: 675, resize: 'fit' },
                    large: { w: 1280, h: 720, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' }
                  }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 2962738476,
              id_str: '2962738476',
              name: 'MS Dhoni Fans #Dhoni',
              screen_name: 'msdfansofficial',
              location: 'Ranchi, India',
              description: 'Official Fan Club of Mahendra Singh Dhoni. insights & updates on MS Dhoni. #Dhoni @msdhoni https://t.co/DxND6ychgJ',
              url: 'https://t.co/vIL4WfRXaa',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/vIL4WfRXaa',
                      expanded_url: 'https://www.facebook.com/MSDhoniFansOfficial',
                      display_url: 'facebook.com/MSDhoniFansOff…',
                      indices: [0, 23]
                    }
                  ]
                },
                description: {
                  urls: [
                    {
                      url: 'https://t.co/DxND6ychgJ',
                      expanded_url: 'https://www.instagram.com/msdhonifansofficial/',
                      display_url: 'instagram.com/msdhonifansoff…',
                      indices: [91, 114]
                    }
                  ]
                }
              },
              protected: false,
              followers_count: 37410,
              friends_count: 28,
              listed_count: 24,
              created_at: 'Wed Jan 07 09:42:39 +0000 2015',
              favourites_count: 54,
              utc_offset: 19800,
              time_zone: 'Chennai',
              geo_enabled: true,
              verified: false,
              statuses_count: 5483,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme16/bg.gif',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme16/bg.gif',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/2962738476/1493447487',
              profile_link_color: '73CDF7',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 55,
            favorite_count: 382,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 55,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:44 +0000 2017',
          id: 917018676200579100,
          id_str: '917018676200579073',
          text: "RT @dna: WATCH: Virat Kohli playing with MS Dhoni's daughter Ziva is the cutest thing you'll see today! https://t.co/rsAovpXzIA https://t.c…",
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [{ screen_name: 'dna', name: 'DNA', id: 17710740, id_str: '17710740', indices: [3, 7] }],
            urls: [
              {
                url: 'https://t.co/rsAovpXzIA',
                expanded_url: 'http://dnai.in/f6r2',
                display_url: 'dnai.in/f6r2',
                indices: [104, 127]
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 140739269,
            id_str: '140739269',
            name: 'Shekhar_MUFC',
            screen_name: 'shekharlog',
            location: 'India',
            description: 'Big Sports Enthusiast | In love with @MANUTD | #TeamIndia | @DFB_Team Football | #CR7 | #MSD | Movies | Foodie | F1 | ForceIndia | Proud Indian |',
            url: 'https://t.co/0va3mvrN1I',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/0va3mvrN1I',
                    expanded_url: 'http://www.facebook.com/shekharlog',
                    display_url: 'facebook.com/shekharlog',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 723,
            friends_count: 881,
            listed_count: 20,
            created_at: 'Thu May 06 08:03:02 +0000 2010',
            favourites_count: 710,
            utc_offset: 19800,
            time_zone: 'Kolkata',
            geo_enabled: true,
            verified: false,
            statuses_count: 6600,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'C0DEED',
            profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000064601484/910df8a9d758d0d68b18a0988e629091.jpeg',
            profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000064601484/910df8a9d758d0d68b18a0988e629091.jpeg',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/844618594658996224/0a7Wh_o1_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/844618594658996224/0a7Wh_o1_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/140739269/1448163197',
            profile_link_color: '1281A3',
            profile_sidebar_border_color: 'FFFFFF',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 12:28:11 +0000 2017',
            id: 917003691273494500,
            id_str: '917003691273494528',
            text: "WATCH: Virat Kohli playing with MS Dhoni's daughter Ziva is the cutest thing you'll see today!… https://t.co/SmnHRYH3Pg",
            truncated: true,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [],
              urls: [
                {
                  url: 'https://t.co/SmnHRYH3Pg',
                  expanded_url: 'https://twitter.com/i/web/status/917003691273494528',
                  display_url: 'twitter.com/i/web/status/9…',
                  indices: [96, 119]
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 17710740,
              id_str: '17710740',
              name: 'DNA',
              screen_name: 'dna',
              location: 'India',
              description: 'Follow us for news, photos, videos and the latest trends from India and around the world. http://t.co/IZXefx3rSt',
              url: 'http://t.co/IZXefx3rSt',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'http://t.co/IZXefx3rSt',
                      expanded_url: 'http://www.dnaindia.com',
                      display_url: 'dnaindia.com',
                      indices: [0, 22]
                    }
                  ]
                },
                description: {
                  urls: [
                    {
                      url: 'http://t.co/IZXefx3rSt',
                      expanded_url: 'http://www.dnaindia.com',
                      display_url: 'dnaindia.com',
                      indices: [90, 112]
                    }
                  ]
                }
              },
              protected: false,
              followers_count: 1746066,
              friends_count: 354,
              listed_count: 3445,
              created_at: 'Fri Nov 28 15:39:38 +0000 2008',
              favourites_count: 92,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: false,
              verified: true,
              statuses_count: 414256,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'FFFFFF',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000175778006/yAHZPUM0.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000175778006/yAHZPUM0.jpeg',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/864432203370905601/yWa-6Q9O_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/864432203370905601/yWa-6Q9O_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/17710740/1507174704',
              profile_link_color: '1B95E0',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '542437',
              profile_text_color: 'C02942',
              profile_use_background_image: true,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'regular'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 8,
            favorite_count: 45,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 8,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:43 +0000 2017',
          id: 917018670249009200,
          id_str: '917018670249009153',
          text: 'RT @BrokenCricket: " Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'BrokenCricket',
                name: 'Broken Cricket',
                id: 907619970,
                id_str: '907619970',
                indices: [3, 17]
              }
            ],
            urls: []
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="https://mobile.twitter.com" rel="nofollow">Mobile Web (M2)</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 917018286910345200,
            id_str: '917018286910345218',
            name: 'BUY FOLLO₩ERS :yuk',
            screen_name: 'KilleanTessa',
            location: '',
            description: 'Check the first twěět for the Iiŉk \n\nref:riebfpnb',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 0,
            friends_count: 0,
            listed_count: 0,
            created_at: 'Sun Oct 08 13:26:11 +0000 2017',
            favourites_count: 0,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 279,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/917018585867853825/VzoICPy7_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/917018585867853825/VzoICPy7_normal.jpg',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: false,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 08:34:36 +0000 2017',
            id: 916944908337868800,
            id_str: '916944908337868800',
            text: '" Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
            truncated: false,
            entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 907619970,
              id_str: '907619970',
              name: 'Broken Cricket',
              screen_name: 'BrokenCricket',
              location: '',
              description: 'I was married to Sachin then fell in Love with Kohli now secretly dating AB',
              url: 'https://t.co/FBWn6henPH',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/FBWn6henPH',
                      expanded_url: 'https://www.facebook.com/BrokenCricketofficial/',
                      display_url: 'facebook.com/BrokenCricketo…',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 172513,
              friends_count: 87,
              listed_count: 246,
              created_at: 'Sat Oct 27 08:03:44 +0000 2012',
              favourites_count: 13615,
              utc_offset: 10800,
              time_zone: 'Athens',
              geo_enabled: false,
              verified: false,
              statuses_count: 31679,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/907619970/1498923596',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 363,
            favorite_count: 830,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 363,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:34 +0000 2017',
          id: 917018635352207400,
          id_str: '917018635352207360',
          text: 'RT @officialDhoniFC: These Smiles from our Inspiration, make our Super Sunday. #Dhoni #MSD #Ranchi #IndvAus #Mahi https://t.co/0mDXDrHobe',
          truncated: false,
          entities: {
            hashtags: [
              { text: 'Dhoni', indices: [79, 85] },
              { text: 'MSD', indices: [86, 90] },
              { text: 'Ranchi', indices: [91, 98] },
              { text: 'IndvAus', indices: [99, 107] },
              { text: 'Mahi', indices: [108, 113] }
            ],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'officialDhoniFC',
                name: '#Dhoni #Dhoni FC',
                id: 3019564778,
                id_str: '3019564778',
                indices: [3, 19]
              }
            ],
            urls: [],
            media: [
              {
                id: 916913274330812400,
                id_str: '916913274330812416',
                indices: [114, 137],
                media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                url: 'https://t.co/0mDXDrHobe',
                display_url: 'pic.twitter.com/0mDXDrHobe',
                expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                type: 'photo',
                sizes: {
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 1080, h: 1080, resize: 'fit' },
                  large: { w: 1080, h: 1080, resize: 'fit' },
                  small: { w: 680, h: 680, resize: 'fit' }
                },
                source_status_id: 916913305146474500,
                source_status_id_str: '916913305146474496',
                source_user_id: 1244185244,
                source_user_id_str: '1244185244'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916913274330812400,
                id_str: '916913274330812416',
                indices: [114, 137],
                media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                url: 'https://t.co/0mDXDrHobe',
                display_url: 'pic.twitter.com/0mDXDrHobe',
                expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                type: 'photo',
                sizes: {
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 1080, h: 1080, resize: 'fit' },
                  large: { w: 1080, h: 1080, resize: 'fit' },
                  small: { w: 680, h: 680, resize: 'fit' }
                },
                source_status_id: 916913305146474500,
                source_status_id_str: '916913305146474496',
                source_user_id: 1244185244,
                source_user_id_str: '1244185244'
              },
              {
                id: 916913293846966300,
                id_str: '916913293846966273',
                indices: [114, 137],
                media_url: 'http://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                url: 'https://t.co/0mDXDrHobe',
                display_url: 'pic.twitter.com/0mDXDrHobe',
                expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                type: 'photo',
                sizes: {
                  small: { w: 559, h: 547, resize: 'fit' },
                  large: { w: 559, h: 547, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 559, h: 547, resize: 'fit' }
                },
                source_status_id: 916913305146474500,
                source_status_id_str: '916913305146474496',
                source_user_id: 1244185244,
                source_user_id_str: '1244185244'
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 902940305745338400,
            id_str: '902940305745338369',
            name: 'karthikeyan Palanisa',
            screen_name: 'karthikeyanPa10',
            location: 'Tamil Nadu, India',
            description: 'Sports Cricketers and Commentators Cricketers and Commentators Sports News, TV and Scores Entertainment South Indian Breaking News CEOs Business & CEOs',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 5,
            friends_count: 175,
            listed_count: 0,
            created_at: 'Wed Aug 30 17:05:19 +0000 2017',
            favourites_count: 9,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 344,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/903264169541025792/lF6bzcvg_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/903264169541025792/lF6bzcvg_normal.jpg',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 06:35:05 +0000 2017',
            id: 916914828081582100,
            id_str: '916914828081582080',
            text: 'These Smiles from our Inspiration, make our Super Sunday. #Dhoni #MSD #Ranchi #IndvAus #Mahi https://t.co/0mDXDrHobe',
            truncated: false,
            entities: {
              hashtags: [
                { text: 'Dhoni', indices: [58, 64] },
                { text: 'MSD', indices: [65, 69] },
                { text: 'Ranchi', indices: [70, 77] },
                { text: 'IndvAus', indices: [78, 86] },
                { text: 'Mahi', indices: [87, 92] }
              ],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916913274330812400,
                  id_str: '916913274330812416',
                  indices: [93, 116],
                  media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  url: 'https://t.co/0mDXDrHobe',
                  display_url: 'pic.twitter.com/0mDXDrHobe',
                  expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  },
                  source_status_id: 916913305146474500,
                  source_status_id_str: '916913305146474496',
                  source_user_id: 1244185244,
                  source_user_id_str: '1244185244'
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916913274330812400,
                  id_str: '916913274330812416',
                  indices: [93, 116],
                  media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  url: 'https://t.co/0mDXDrHobe',
                  display_url: 'pic.twitter.com/0mDXDrHobe',
                  expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  },
                  source_status_id: 916913305146474500,
                  source_status_id_str: '916913305146474496',
                  source_user_id: 1244185244,
                  source_user_id_str: '1244185244'
                },
                {
                  id: 916913293846966300,
                  id_str: '916913293846966273',
                  indices: [93, 116],
                  media_url: 'http://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                  url: 'https://t.co/0mDXDrHobe',
                  display_url: 'pic.twitter.com/0mDXDrHobe',
                  expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                  type: 'photo',
                  sizes: {
                    small: { w: 559, h: 547, resize: 'fit' },
                    large: { w: 559, h: 547, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 559, h: 547, resize: 'fit' }
                  },
                  source_status_id: 916913305146474500,
                  source_status_id_str: '916913305146474496',
                  source_user_id: 1244185244,
                  source_user_id_str: '1244185244'
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="https://ifttt.com" rel="nofollow">IFTTT</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 3019564778,
              id_str: '3019564778',
              name: '#Dhoni #Dhoni FC',
              screen_name: 'officialDhoniFC',
              location: 'India √',
              description: '#MsDhoni #Dhoni\r\n#MsDhoni #Dhoni\r\n#MsDhoni #Dhoni\r\nMsDhoni Dhoni\r\n#MsDhoni #Dhoni\r\nMsDhoni Dhoni\r\n#MsDhoni #Dhoni\r\nMsDhoni Dhoni\r\nMsDhoni Dhoni\r\n#Dhoni  #Dhoni',
              url: 'https://t.co/CjQ5gS1lWY',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/CjQ5gS1lWY',
                      expanded_url: 'http://Espncricinfo.com',
                      display_url: 'Espncricinfo.com',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 35745,
              friends_count: 25,
              listed_count: 76,
              created_at: 'Sat Feb 14 11:51:57 +0000 2015',
              favourites_count: 1091,
              utc_offset: 18000,
              time_zone: 'Karachi',
              geo_enabled: false,
              verified: false,
              statuses_count: 26152,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/911771392013688832/tZEKmYJa_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/911771392013688832/tZEKmYJa_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/3019564778/1506218219',
              profile_link_color: 'FA743E',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 2,
            favorite_count: 10,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 2,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:16 +0000 2017',
          id: 917018558093156400,
          id_str: '917018558093156352',
          text: 'RT @DHONIism: Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
          truncated: false,
          entities: {
            hashtags: [{ text: 'Ziva', indices: [30, 35] }],
            symbols: [],
            user_mentions: [
              { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
            ],
            urls: [],
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'photo',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'video',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635',
                video_info: {
                  aspect_ratio: [20, 11],
                  duration_millis: 29267,
                  variants: [
                    {
                      bitrate: 320000,
                      content_type: 'video/mp4',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                    },
                    {
                      content_type: 'application/x-mpegURL',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                    }
                  ]
                },
                additional_media_info: {
                  monetizable: false,
                  source_user: {
                    id: 1727522635,
                    id_str: '1727522635',
                    name: 'DHONIsm ♥',
                    screen_name: 'DHONIism',
                    location: 'from Tamil Nadu to World :)',
                    description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                    url: 'https://t.co/VSrp5PXoY5',
                    entities: {
                      url: {
                        urls: [
                          {
                            url: 'https://t.co/VSrp5PXoY5',
                            expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                            display_url: 'facebook.com/BleedDhonIsm',
                            indices: [0, 23]
                          }
                        ]
                      },
                      description: { urls: [] }
                    },
                    protected: false,
                    followers_count: 133889,
                    friends_count: 23,
                    listed_count: 32,
                    created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                    favourites_count: 743,
                    utc_offset: 19800,
                    time_zone: 'New Delhi',
                    geo_enabled: true,
                    verified: false,
                    statuses_count: 7310,
                    lang: 'en',
                    contributors_enabled: false,
                    is_translator: false,
                    is_translation_enabled: false,
                    profile_background_color: 'C0DEED',
                    profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_tile: true,
                    profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                    profile_link_color: '0084B4',
                    profile_sidebar_border_color: 'FFFFFF',
                    profile_sidebar_fill_color: 'DDEEF6',
                    profile_text_color: '333333',
                    profile_use_background_image: true,
                    has_extended_profile: true,
                    default_profile: false,
                    default_profile_image: false,
                    following: false,
                    follow_request_sent: false,
                    notifications: false,
                    translator_type: 'none'
                  }
                }
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 585334504,
            id_str: '585334504',
            name: 'Mersal Bharath',
            screen_name: 'BharathTinz',
            location: 'Chennai, India',
            description: 'Thalapathy Veriyan! 😎😎😍 MSDian! ❤❤❤❤ Amateur photographer. 😁😝  Co-founder and Director of Photography : @sutta_vada',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 323,
            friends_count: 300,
            listed_count: 6,
            created_at: 'Sun May 20 03:44:18 +0000 2012',
            favourites_count: 63493,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 26125,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'C0DEED',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/916934292697104384/eKW4W9C1_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/916934292697104384/eKW4W9C1_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/585334504/1507449149',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 12:03:19 +0000 2017',
            id: 916997430331162600,
            id_str: '916997430331162624',
            text: 'Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Ziva', indices: [16, 21] }],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'photo',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'video',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  video_info: {
                    aspect_ratio: [20, 11],
                    duration_millis: 29267,
                    variants: [
                      {
                        bitrate: 320000,
                        content_type: 'video/mp4',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                      },
                      {
                        content_type: 'application/x-mpegURL',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                      }
                    ]
                  },
                  additional_media_info: { monetizable: false }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 1727522635,
              id_str: '1727522635',
              name: 'DHONIsm ♥',
              screen_name: 'DHONIism',
              location: 'from Tamil Nadu to World :)',
              description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
              url: 'https://t.co/VSrp5PXoY5',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/VSrp5PXoY5',
                      expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                      display_url: 'facebook.com/BleedDhonIsm',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 133889,
              friends_count: 23,
              listed_count: 32,
              created_at: 'Wed Sep 04 03:52:58 +0000 2013',
              favourites_count: 743,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 7310,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_tile: true,
              profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
              profile_link_color: '0084B4',
              profile_sidebar_border_color: 'FFFFFF',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 112,
            favorite_count: 309,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 112,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:26:59 +0000 2017',
          id: 917018488534732800,
          id_str: '917018488534732805',
          text: 'RT @BrokenCricket: " Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'BrokenCricket',
                name: 'Broken Cricket',
                id: 907619970,
                id_str: '907619970',
                indices: [3, 17]
              }
            ],
            urls: []
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 144089436,
            id_str: '144089436',
            name: 'Jegan',
            screen_name: 'IamJegan',
            location: 'Tuticorin / Trichy / Chennai',
            description: 'A Big Fanatic of @SGanguly99. Want him to Coach Team India & Lift the World Cup! Thala Ajith Addict!',
            url: 'https://t.co/lyD9bn1TXG',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/lyD9bn1TXG',
                    expanded_url: 'http://thecineket.com',
                    display_url: 'thecineket.com',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 3270,
            friends_count: 281,
            listed_count: 15,
            created_at: 'Sat May 15 07:56:02 +0000 2010',
            favourites_count: 778,
            utc_offset: 19800,
            time_zone: 'Chennai',
            geo_enabled: true,
            verified: false,
            statuses_count: 31673,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '352726',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme5/bg.gif',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme5/bg.gif',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/906201523725623296/pHeFZ-tQ_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/906201523725623296/pHeFZ-tQ_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/144089436/1436104530',
            profile_link_color: 'D02B55',
            profile_sidebar_border_color: '829D5E',
            profile_sidebar_fill_color: '99CC33',
            profile_text_color: '3E4415',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 08:34:36 +0000 2017',
            id: 916944908337868800,
            id_str: '916944908337868800',
            text: '" Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
            truncated: false,
            entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 907619970,
              id_str: '907619970',
              name: 'Broken Cricket',
              screen_name: 'BrokenCricket',
              location: '',
              description: 'I was married to Sachin then fell in Love with Kohli now secretly dating AB',
              url: 'https://t.co/FBWn6henPH',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/FBWn6henPH',
                      expanded_url: 'https://www.facebook.com/BrokenCricketofficial/',
                      display_url: 'facebook.com/BrokenCricketo…',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 172513,
              friends_count: 87,
              listed_count: 246,
              created_at: 'Sat Oct 27 08:03:44 +0000 2012',
              favourites_count: 13615,
              utc_offset: 10800,
              time_zone: 'Athens',
              geo_enabled: false,
              verified: false,
              statuses_count: 31679,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/907619970/1498923596',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 363,
            favorite_count: 830,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 363,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:26:34 +0000 2017',
          id: 917018382884495400,
          id_str: '917018382884495360',
          text: 'RT @DHONIism: Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
          truncated: false,
          entities: {
            hashtags: [{ text: 'Ziva', indices: [30, 35] }],
            symbols: [],
            user_mentions: [
              { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
            ],
            urls: [],
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'photo',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'video',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635',
                video_info: {
                  aspect_ratio: [20, 11],
                  duration_millis: 29267,
                  variants: [
                    {
                      bitrate: 320000,
                      content_type: 'video/mp4',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                    },
                    {
                      content_type: 'application/x-mpegURL',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                    }
                  ]
                },
                additional_media_info: {
                  monetizable: false,
                  source_user: {
                    id: 1727522635,
                    id_str: '1727522635',
                    name: 'DHONIsm ♥',
                    screen_name: 'DHONIism',
                    location: 'from Tamil Nadu to World :)',
                    description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                    url: 'https://t.co/VSrp5PXoY5',
                    entities: {
                      url: {
                        urls: [
                          {
                            url: 'https://t.co/VSrp5PXoY5',
                            expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                            display_url: 'facebook.com/BleedDhonIsm',
                            indices: [0, 23]
                          }
                        ]
                      },
                      description: { urls: [] }
                    },
                    protected: false,
                    followers_count: 133889,
                    friends_count: 23,
                    listed_count: 32,
                    created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                    favourites_count: 743,
                    utc_offset: 19800,
                    time_zone: 'New Delhi',
                    geo_enabled: true,
                    verified: false,
                    statuses_count: 7310,
                    lang: 'en',
                    contributors_enabled: false,
                    is_translator: false,
                    is_translation_enabled: false,
                    profile_background_color: 'C0DEED',
                    profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_tile: true,
                    profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                    profile_link_color: '0084B4',
                    profile_sidebar_border_color: 'FFFFFF',
                    profile_sidebar_fill_color: 'DDEEF6',
                    profile_text_color: '333333',
                    profile_use_background_image: true,
                    has_extended_profile: true,
                    default_profile: false,
                    default_profile_image: false,
                    following: false,
                    follow_request_sent: false,
                    notifications: false,
                    translator_type: 'none'
                  }
                }
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 3174923622,
            id_str: '3174923622',
            name: 'Aяνιηтн',
            screen_name: 'ArvinthVj',
            location: 'Erode, India',
            description: 'சராசரி இந்திய ப்ரஜை || Mech || Cine | Tech freak\n|| A man in search is the Man Indeed || Proud Gixxeriann😎',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 5112,
            friends_count: 465,
            listed_count: 22,
            created_at: 'Sun Apr 26 05:37:28 +0000 2015',
            favourites_count: 16446,
            utc_offset: 19800,
            time_zone: 'New Delhi',
            geo_enabled: true,
            verified: false,
            statuses_count: 28355,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '642D8B',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme10/bg.gif',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme10/bg.gif',
            profile_background_tile: true,
            profile_image_url: 'http://pbs.twimg.com/profile_images/911612405133615104/Lmh9E_-S_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/911612405133615104/Lmh9E_-S_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/3174923622/1505735402',
            profile_link_color: 'FF0000',
            profile_sidebar_border_color: '65B0DA',
            profile_sidebar_fill_color: '7AC3EE',
            profile_text_color: '3D1957',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 12:03:19 +0000 2017',
            id: 916997430331162600,
            id_str: '916997430331162624',
            text: 'Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Ziva', indices: [16, 21] }],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'photo',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'video',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  video_info: {
                    aspect_ratio: [20, 11],
                    duration_millis: 29267,
                    variants: [
                      {
                        bitrate: 320000,
                        content_type: 'video/mp4',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                      },
                      {
                        content_type: 'application/x-mpegURL',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                      }
                    ]
                  },
                  additional_media_info: { monetizable: false }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 1727522635,
              id_str: '1727522635',
              name: 'DHONIsm ♥',
              screen_name: 'DHONIism',
              location: 'from Tamil Nadu to World :)',
              description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
              url: 'https://t.co/VSrp5PXoY5',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/VSrp5PXoY5',
                      expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                      display_url: 'facebook.com/BleedDhonIsm',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 133889,
              friends_count: 23,
              listed_count: 32,
              created_at: 'Wed Sep 04 03:52:58 +0000 2013',
              favourites_count: 743,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 7310,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_tile: true,
              profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
              profile_link_color: '0084B4',
              profile_sidebar_border_color: 'FFFFFF',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 112,
            favorite_count: 309,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 112,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:26:30 +0000 2017',
          id: 917018367281655800,
          id_str: '917018367281655808',
          text: 'RT @FirstCric: "Had Sourav Ganguly not promoted Dhoni to No 3, he wouldn’t have become such a great player," says Virender Sehwag\nhttps://t…',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'FirstCric',
                name: 'FirstCricket',
                id: 888369388906135600,
                id_str: '888369388906135552',
                indices: [3, 13]
              }
            ],
            urls: []
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 1348006476,
            id_str: '1348006476',
            name: 'A',
            screen_name: 'Arijitme',
            location: 'India',
            description: '#Believeinyourself#NeverGiveup inlife#Entrepreneur#Dreamer#Achiever#Chelsea#Moviebuff#PremierLeague.. Events - DM for Enquiries',
            url: 'https://t.co/SE8gkxhOkj',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/SE8gkxhOkj',
                    expanded_url: 'https://movewanderlust.com',
                    display_url: 'movewanderlust.com',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 132,
            friends_count: 197,
            listed_count: 10,
            created_at: 'Sat Apr 13 00:26:28 +0000 2013',
            favourites_count: 2730,
            utc_offset: 19800,
            time_zone: 'New Delhi',
            geo_enabled: true,
            verified: false,
            statuses_count: 6076,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '022330',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme15/bg.png',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme15/bg.png',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/908981012352212992/Vf0kJ9Ha_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/908981012352212992/Vf0kJ9Ha_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/1348006476/1498468283',
            profile_link_color: '0084B4',
            profile_sidebar_border_color: 'A8C7F7',
            profile_sidebar_fill_color: 'C0DFEC',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 13:21:10 +0000 2017',
            id: 917017025662263300,
            id_str: '917017025662263296',
            text: '"Had Sourav Ganguly not promoted Dhoni to No 3, he wouldn’t have become such a great player," says Virender Sehwag\nhttps://t.co/FIANVgKeRI',
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [],
              urls: [
                {
                  url: 'https://t.co/FIANVgKeRI',
                  expanded_url: 'http://www.firstpost.com/firstcricket/sports-news/sourav-ganguly-sacrificed-his-batting-spot-to-make-ms-dhoni-a-great-player-says-virender-sehwag-4121625.html',
                  display_url: 'firstpost.com/firstcricket/s…',
                  indices: [115, 138]
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="https://about.twitter.com/products/tweetdeck" rel="nofollow">TweetDeck</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 888369388906135600,
              id_str: '888369388906135552',
              name: 'FirstCricket',
              screen_name: 'FirstCric',
              location: '',
              description: 'Bringing you live updates, breaking news, opinions and photos from the world of cricket',
              url: 'https://t.co/X7UPznamYz',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/X7UPznamYz',
                      expanded_url: 'http://www.firstpost.com/firstcricket/',
                      display_url: 'firstpost.com/firstcricket/',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 603,
              friends_count: 47,
              listed_count: 9,
              created_at: 'Fri Jul 21 12:05:42 +0000 2017',
              favourites_count: 0,
              utc_offset: -25200,
              time_zone: 'Pacific Time (US & Canada)',
              geo_enabled: false,
              verified: false,
              statuses_count: 3114,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/888370591685726208/Jr6laI3X_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/888370591685726208/Jr6laI3X_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/888369388906135552/1502726156',
              profile_link_color: 'A6CE39',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 3,
            favorite_count: 2,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 3,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:25:55 +0000 2017',
          id: 917018217792417800,
          id_str: '917018217792417792',
          text: 'RT @DHONIism: Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
          truncated: false,
          entities: {
            hashtags: [{ text: 'Ziva', indices: [30, 35] }],
            symbols: [],
            user_mentions: [
              { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
            ],
            urls: [],
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'photo',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'video',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635',
                video_info: {
                  aspect_ratio: [20, 11],
                  duration_millis: 29267,
                  variants: [
                    {
                      bitrate: 320000,
                      content_type: 'video/mp4',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                    },
                    {
                      content_type: 'application/x-mpegURL',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                    }
                  ]
                },
                additional_media_info: {
                  monetizable: false,
                  source_user: {
                    id: 1727522635,
                    id_str: '1727522635',
                    name: 'DHONIsm ♥',
                    screen_name: 'DHONIism',
                    location: 'from Tamil Nadu to World :)',
                    description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                    url: 'https://t.co/VSrp5PXoY5',
                    entities: {
                      url: {
                        urls: [
                          {
                            url: 'https://t.co/VSrp5PXoY5',
                            expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                            display_url: 'facebook.com/BleedDhonIsm',
                            indices: [0, 23]
                          }
                        ]
                      },
                      description: { urls: [] }
                    },
                    protected: false,
                    followers_count: 133889,
                    friends_count: 23,
                    listed_count: 32,
                    created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                    favourites_count: 743,
                    utc_offset: 19800,
                    time_zone: 'New Delhi',
                    geo_enabled: true,
                    verified: false,
                    statuses_count: 7310,
                    lang: 'en',
                    contributors_enabled: false,
                    is_translator: false,
                    is_translation_enabled: false,
                    profile_background_color: 'C0DEED',
                    profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_tile: true,
                    profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                    profile_link_color: '0084B4',
                    profile_sidebar_border_color: 'FFFFFF',
                    profile_sidebar_fill_color: 'DDEEF6',
                    profile_text_color: '333333',
                    profile_use_background_image: true,
                    has_extended_profile: true,
                    default_profile: false,
                    default_profile_image: false,
                    following: false,
                    follow_request_sent: false,
                    notifications: false,
                    translator_type: 'none'
                  }
                }
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 871408030474162200,
            id_str: '871408030474162176',
            name: 'MS Dhoni',
            screen_name: 'MSDhoni85350822',
            location: 'Bengaluru South, India',
            description: "I love my country india💙\n                                            I'm a fan of MS Dhoni and Rajinikanth..💖\n                  👉Pawan kalyan is my Heart💖..",
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 76,
            friends_count: 381,
            listed_count: 1,
            created_at: 'Sun Jun 04 16:47:19 +0000 2017',
            favourites_count: 3276,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 2141,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/916849356094844928/i7JSZkxX_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/916849356094844928/i7JSZkxX_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/871408030474162176/1502765044',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 12:03:19 +0000 2017',
            id: 916997430331162600,
            id_str: '916997430331162624',
            text: 'Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Ziva', indices: [16, 21] }],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'photo',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'video',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  video_info: {
                    aspect_ratio: [20, 11],
                    duration_millis: 29267,
                    variants: [
                      {
                        bitrate: 320000,
                        content_type: 'video/mp4',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                      },
                      {
                        content_type: 'application/x-mpegURL',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                      }
                    ]
                  },
                  additional_media_info: { monetizable: false }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 1727522635,
              id_str: '1727522635',
              name: 'DHONIsm ♥',
              screen_name: 'DHONIism',
              location: 'from Tamil Nadu to World :)',
              description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
              url: 'https://t.co/VSrp5PXoY5',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/VSrp5PXoY5',
                      expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                      display_url: 'facebook.com/BleedDhonIsm',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 133889,
              friends_count: 23,
              listed_count: 32,
              created_at: 'Wed Sep 04 03:52:58 +0000 2013',
              favourites_count: 743,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 7310,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_tile: true,
              profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
              profile_link_color: '0084B4',
              profile_sidebar_border_color: 'FFFFFF',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 112,
            favorite_count: 309,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 112,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        }
      ]
    }
  );
  expect(state).toEqual({
    searchTerm: 'dhoni',
    searchData: {
      data: [
        {
          created_at: 'Sun Oct 08 13:29:09 +0000 2017',
          id: 917019033584787500,
          id_str: '917019033584787456',
          text: "CUTE | Virat Kohli having fun with MS Dhoni's daughter Ziva | Must Watch | Virat Fans.: https://t.co/E11Ex214lc via @YouTube",
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              { screen_name: 'YouTube', name: 'YouTube', id: 10228272, id_str: '10228272', indices: [116, 124] }
            ],
            urls: [
              {
                url: 'https://t.co/E11Ex214lc',
                expanded_url: 'http://youtu.be/mtflMTy9r7E?a',
                display_url: 'youtu.be/mtflMTy9r7E?a',
                indices: [88, 111]
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://www.google.com/" rel="nofollow">Google</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 711870517,
            id_str: '711870517',
            name: 'Rockstar',
            screen_name: 'shivamrocks02',
            location: 'India',
            description: 'Just living my dreams.',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 4750,
            friends_count: 490,
            listed_count: 30,
            created_at: 'Mon Jul 23 05:41:19 +0000 2012',
            favourites_count: 24671,
            utc_offset: 19800,
            time_zone: 'New Delhi',
            geo_enabled: false,
            verified: false,
            statuses_count: 49357,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '000000',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme9/bg.gif',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme9/bg.gif',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/790939117039214592/IcLtgmBx_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/790939117039214592/IcLtgmBx_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/711870517/1436525719',
            profile_link_color: '1B95E0',
            profile_sidebar_border_color: '000000',
            profile_sidebar_fill_color: '000000',
            profile_text_color: '000000',
            profile_use_background_image: false,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 0,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:28:47 +0000 2017',
          id: 917018941968539600,
          id_str: '917018941968539648',
          text: 'How Sourav Ganguly played his part in making of the legend of MS Dhoni https://t.co/qVbpmHaM4A',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [],
            urls: [
              {
                url: 'https://t.co/qVbpmHaM4A',
                expanded_url: 'http://ift.tt/2kvt1XM',
                display_url: 'ift.tt/2kvt1XM',
                indices: [71, 94]
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="https://ifttt.com" rel="nofollow">IFTTT</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 178544713,
            id_str: '178544713',
            name: 'NewsStory',
            screen_name: 'NewsStoryIndia',
            location: 'India',
            description: 'Follow us now to get news from more than 100 news channels.No copyright Direct references to news content. Follow Now.\nProudly Made in India.जय हिन्द !! जय भारत',
            url: 'https://t.co/Wtiy0ExqsI',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/Wtiy0ExqsI',
                    expanded_url: 'http://newsstory.webnode.com',
                    display_url: 'newsstory.webnode.com',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 4601,
            friends_count: 28,
            listed_count: 27,
            created_at: 'Sun Aug 15 01:58:36 +0000 2010',
            favourites_count: 789,
            utc_offset: -25200,
            time_zone: 'Pacific Time (US & Canada)',
            geo_enabled: false,
            verified: false,
            statuses_count: 114332,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '000000',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme9/bg.gif',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme9/bg.gif',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/829323773769818113/0Z6sbzum_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/829323773769818113/0Z6sbzum_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/178544713/1475310281',
            profile_link_color: '3B94D9',
            profile_sidebar_border_color: '000000',
            profile_sidebar_fill_color: '000000',
            profile_text_color: '000000',
            profile_use_background_image: false,
            has_extended_profile: false,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 0,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:28:25 +0000 2017',
          id: 917018846690648000,
          id_str: '917018846690648064',
          text: 'RT @DHONIism: VVS Laxman - "Not only in Ranchi or in India, Dhoni will get the loudest cheer in overseas also &amp; he is an absolute Legend of…',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
            ],
            urls: []
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 833203035690192900,
            id_str: '833203035690192896',
            name: 'THE SALMAN KHAN 🔛🔝',
            screen_name: 'SalmanKaStarDom',
            location: 'Under Construction',
            description: "👉 #TIGER  🙏\nSalman Khan's FAN  @BeingSalmanKhan  #Tiger_Zinda_Hai on 22nd Dec 2017. Following Only Salman Khan's Fans",
            url: 'https://t.co/5JUl38Jryy',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/5JUl38Jryy',
                    expanded_url: 'http://SaraJagGhoomeyaLekinInkeJaisaNaKoi.com',
                    display_url: 'SaraJagGhoomeyaLekinInkeJaisaNaKoi.com',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 498,
            friends_count: 203,
            listed_count: 0,
            created_at: 'Sun Feb 19 06:34:18 +0000 2017',
            favourites_count: 8144,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 5880,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/912237357692215296/TTCvH5V4_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/912237357692215296/TTCvH5V4_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/833203035690192896/1506143031',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sat Oct 07 16:53:40 +0000 2017',
            id: 916708115302686700,
            id_str: '916708115302686720',
            text: 'VVS Laxman - "Not only in Ranchi or in India, Dhoni will get the loudest cheer in overseas also &amp; he is an absolute Legend of the game"',
            truncated: false,
            entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 1727522635,
              id_str: '1727522635',
              name: 'DHONIsm ♥',
              screen_name: 'DHONIism',
              location: 'from Tamil Nadu to World :)',
              description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
              url: 'https://t.co/VSrp5PXoY5',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/VSrp5PXoY5',
                      expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                      display_url: 'facebook.com/BleedDhonIsm',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 133889,
              friends_count: 23,
              listed_count: 32,
              created_at: 'Wed Sep 04 03:52:58 +0000 2013',
              favourites_count: 743,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 7310,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_tile: true,
              profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
              profile_link_color: '0084B4',
              profile_sidebar_border_color: 'FFFFFF',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 217,
            favorite_count: 562,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 217,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:28:23 +0000 2017',
          id: 917018841133195300,
          id_str: '917018841133195265',
          text: 'RT @msdfansofficial: His Smile is reason for billions Smile😇\n#Dhoni #INDvAUS https://t.co/vBVso0kX3V',
          truncated: false,
          entities: {
            hashtags: [{ text: 'Dhoni', indices: [61, 67] }, { text: 'INDvAUS', indices: [68, 76] }],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'msdfansofficial',
                name: 'MS Dhoni Fans #Dhoni',
                id: 2962738476,
                id_str: '2962738476',
                indices: [3, 19]
              }
            ],
            urls: [],
            media: [
              {
                id: 916886912534667300,
                id_str: '916886912534667265',
                indices: [77, 100],
                media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                url: 'https://t.co/vBVso0kX3V',
                display_url: 'pic.twitter.com/vBVso0kX3V',
                expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                type: 'photo',
                sizes: {
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 1080, h: 1080, resize: 'fit' },
                  large: { w: 1080, h: 1080, resize: 'fit' },
                  small: { w: 680, h: 680, resize: 'fit' }
                },
                source_status_id: 916886937209675800,
                source_status_id_str: '916886937209675776',
                source_user_id: 2962738476,
                source_user_id_str: '2962738476'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916886912534667300,
                id_str: '916886912534667265',
                indices: [77, 100],
                media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                url: 'https://t.co/vBVso0kX3V',
                display_url: 'pic.twitter.com/vBVso0kX3V',
                expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                type: 'photo',
                sizes: {
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 1080, h: 1080, resize: 'fit' },
                  large: { w: 1080, h: 1080, resize: 'fit' },
                  small: { w: 680, h: 680, resize: 'fit' }
                },
                source_status_id: 916886937209675800,
                source_status_id_str: '916886937209675776',
                source_user_id: 2962738476,
                source_user_id_str: '2962738476'
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Lite</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 821266766341017600,
            id_str: '821266766341017600',
            name: 'Varunmsdian77',
            screen_name: 'Varunmsdian77',
            location: 'Tamilnadu,INDIA',
            description: 'Proud to be an msdian. A big fan of sivakarthikeyanism.',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 18,
            friends_count: 94,
            listed_count: 0,
            created_at: 'Tue Jan 17 08:03:50 +0000 2017',
            favourites_count: 389,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 1024,
            lang: 'en-gb',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: false,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 04:44:15 +0000 2017',
            id: 916886937209675800,
            id_str: '916886937209675776',
            text: 'His Smile is reason for billions Smile😇\n#Dhoni #INDvAUS https://t.co/vBVso0kX3V',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Dhoni', indices: [40, 46] }, { text: 'INDvAUS', indices: [47, 55] }],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916886912534667300,
                  id_str: '916886912534667265',
                  indices: [56, 79],
                  media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  url: 'https://t.co/vBVso0kX3V',
                  display_url: 'pic.twitter.com/vBVso0kX3V',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916886912534667300,
                  id_str: '916886912534667265',
                  indices: [56, 79],
                  media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  url: 'https://t.co/vBVso0kX3V',
                  display_url: 'pic.twitter.com/vBVso0kX3V',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 2962738476,
              id_str: '2962738476',
              name: 'MS Dhoni Fans #Dhoni',
              screen_name: 'msdfansofficial',
              location: 'Ranchi, India',
              description: 'Official Fan Club of Mahendra Singh Dhoni. insights & updates on MS Dhoni. #Dhoni @msdhoni https://t.co/DxND6ychgJ',
              url: 'https://t.co/vIL4WfRXaa',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/vIL4WfRXaa',
                      expanded_url: 'https://www.facebook.com/MSDhoniFansOfficial',
                      display_url: 'facebook.com/MSDhoniFansOff…',
                      indices: [0, 23]
                    }
                  ]
                },
                description: {
                  urls: [
                    {
                      url: 'https://t.co/DxND6ychgJ',
                      expanded_url: 'https://www.instagram.com/msdhonifansofficial/',
                      display_url: 'instagram.com/msdhonifansoff…',
                      indices: [91, 114]
                    }
                  ]
                }
              },
              protected: false,
              followers_count: 37410,
              friends_count: 28,
              listed_count: 24,
              created_at: 'Wed Jan 07 09:42:39 +0000 2015',
              favourites_count: 54,
              utc_offset: 19800,
              time_zone: 'Chennai',
              geo_enabled: true,
              verified: false,
              statuses_count: 5483,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme16/bg.gif',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme16/bg.gif',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/2962738476/1493447487',
              profile_link_color: '73CDF7',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 51,
            favorite_count: 357,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 51,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:28:15 +0000 2017',
          id: 917018808253952000,
          id_str: '917018808253952002',
          text: 'Virat Kohli’s adorable moments with MS Dhoni’s daughter Ziva.. https://t.co/1cQiRsZOff',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [],
            urls: [
              {
                url: 'https://t.co/1cQiRsZOff',
                expanded_url: 'http://indianexpress.com/photos/sports-gallery/virat-kohlis-adorable-moments-with-ms-dhonis-daughter-ziva-pics-4880713/',
                display_url: 'indianexpress.com/photos/sports-…',
                indices: [63, 86]
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://NewsBoss.in" rel="nofollow">NewsBoss.in</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 753259712028696600,
            id_str: '753259712028696576',
            name: 'NewsBoss.in',
            screen_name: 'NewsBossIndia',
            location: '',
            description: 'News, you can choose!',
            url: 'https://t.co/y9fpUd38h3',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/y9fpUd38h3',
                    expanded_url: 'http://NewsBoss.in',
                    display_url: 'NewsBoss.in',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 945,
            friends_count: 1,
            listed_count: 219,
            created_at: 'Wed Jul 13 16:08:05 +0000 2016',
            favourites_count: 1,
            utc_offset: 19800,
            time_zone: 'New Delhi',
            geo_enabled: false,
            verified: false,
            statuses_count: 1175250,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '000000',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/753260679692333057/AS4Xiw4q_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/753260679692333057/AS4Xiw4q_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/753259712028696576/1468426410',
            profile_link_color: 'E81C4F',
            profile_sidebar_border_color: '000000',
            profile_sidebar_fill_color: '000000',
            profile_text_color: '000000',
            profile_use_background_image: false,
            has_extended_profile: false,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 0,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: true,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:54 +0000 2017',
          id: 917018717048913900,
          id_str: '917018717048913920',
          text: 'RT @msdfansofficial: That smile ♥\n#Dhoni #Ranchi #INDvsAUS https://t.co/mGpu18BGw6',
          truncated: false,
          entities: {
            hashtags: [
              { text: 'Dhoni', indices: [34, 40] },
              { text: 'Ranchi', indices: [41, 48] },
              { text: 'INDvsAUS', indices: [49, 58] }
            ],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'msdfansofficial',
                name: 'MS Dhoni Fans #Dhoni',
                id: 2962738476,
                id_str: '2962738476',
                indices: [3, 19]
              }
            ],
            urls: [],
            media: [
              {
                id: 916843458215559200,
                id_str: '916843458215559168',
                indices: [59, 82],
                media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                url: 'https://t.co/mGpu18BGw6',
                display_url: 'pic.twitter.com/mGpu18BGw6',
                expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                type: 'photo',
                sizes: {
                  small: { w: 680, h: 383, resize: 'fit' },
                  medium: { w: 1200, h: 675, resize: 'fit' },
                  large: { w: 1280, h: 720, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' }
                },
                source_status_id: 916843468424601600,
                source_status_id_str: '916843468424601601',
                source_user_id: 2962738476,
                source_user_id_str: '2962738476'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916843458215559200,
                id_str: '916843458215559168',
                indices: [59, 82],
                media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                url: 'https://t.co/mGpu18BGw6',
                display_url: 'pic.twitter.com/mGpu18BGw6',
                expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                type: 'photo',
                sizes: {
                  small: { w: 680, h: 383, resize: 'fit' },
                  medium: { w: 1200, h: 675, resize: 'fit' },
                  large: { w: 1280, h: 720, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' }
                },
                source_status_id: 916843468424601600,
                source_status_id_str: '916843468424601601',
                source_user_id: 2962738476,
                source_user_id_str: '2962738476'
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Lite</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 821266766341017600,
            id_str: '821266766341017600',
            name: 'Varunmsdian77',
            screen_name: 'Varunmsdian77',
            location: 'Tamilnadu,INDIA',
            description: 'Proud to be an msdian. A big fan of sivakarthikeyanism.',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 18,
            friends_count: 94,
            listed_count: 0,
            created_at: 'Tue Jan 17 08:03:50 +0000 2017',
            favourites_count: 389,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 1024,
            lang: 'en-gb',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: false,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 01:51:31 +0000 2017',
            id: 916843468424601600,
            id_str: '916843468424601601',
            text: 'That smile ♥\n#Dhoni #Ranchi #INDvsAUS https://t.co/mGpu18BGw6',
            truncated: false,
            entities: {
              hashtags: [
                { text: 'Dhoni', indices: [13, 19] },
                { text: 'Ranchi', indices: [20, 27] },
                { text: 'INDvsAUS', indices: [28, 37] }
              ],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916843458215559200,
                  id_str: '916843458215559168',
                  indices: [38, 61],
                  media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  url: 'https://t.co/mGpu18BGw6',
                  display_url: 'pic.twitter.com/mGpu18BGw6',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                  type: 'photo',
                  sizes: {
                    small: { w: 680, h: 383, resize: 'fit' },
                    medium: { w: 1200, h: 675, resize: 'fit' },
                    large: { w: 1280, h: 720, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916843458215559200,
                  id_str: '916843458215559168',
                  indices: [38, 61],
                  media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  url: 'https://t.co/mGpu18BGw6',
                  display_url: 'pic.twitter.com/mGpu18BGw6',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                  type: 'photo',
                  sizes: {
                    small: { w: 680, h: 383, resize: 'fit' },
                    medium: { w: 1200, h: 675, resize: 'fit' },
                    large: { w: 1280, h: 720, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' }
                  }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 2962738476,
              id_str: '2962738476',
              name: 'MS Dhoni Fans #Dhoni',
              screen_name: 'msdfansofficial',
              location: 'Ranchi, India',
              description: 'Official Fan Club of Mahendra Singh Dhoni. insights & updates on MS Dhoni. #Dhoni @msdhoni https://t.co/DxND6ychgJ',
              url: 'https://t.co/vIL4WfRXaa',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/vIL4WfRXaa',
                      expanded_url: 'https://www.facebook.com/MSDhoniFansOfficial',
                      display_url: 'facebook.com/MSDhoniFansOff…',
                      indices: [0, 23]
                    }
                  ]
                },
                description: {
                  urls: [
                    {
                      url: 'https://t.co/DxND6ychgJ',
                      expanded_url: 'https://www.instagram.com/msdhonifansofficial/',
                      display_url: 'instagram.com/msdhonifansoff…',
                      indices: [91, 114]
                    }
                  ]
                }
              },
              protected: false,
              followers_count: 37410,
              friends_count: 28,
              listed_count: 24,
              created_at: 'Wed Jan 07 09:42:39 +0000 2015',
              favourites_count: 54,
              utc_offset: 19800,
              time_zone: 'Chennai',
              geo_enabled: true,
              verified: false,
              statuses_count: 5483,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme16/bg.gif',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme16/bg.gif',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/2962738476/1493447487',
              profile_link_color: '73CDF7',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 55,
            favorite_count: 382,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 55,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:44 +0000 2017',
          id: 917018676200579100,
          id_str: '917018676200579073',
          text: "RT @dna: WATCH: Virat Kohli playing with MS Dhoni's daughter Ziva is the cutest thing you'll see today! https://t.co/rsAovpXzIA https://t.c…",
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [{ screen_name: 'dna', name: 'DNA', id: 17710740, id_str: '17710740', indices: [3, 7] }],
            urls: [
              {
                url: 'https://t.co/rsAovpXzIA',
                expanded_url: 'http://dnai.in/f6r2',
                display_url: 'dnai.in/f6r2',
                indices: [104, 127]
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 140739269,
            id_str: '140739269',
            name: 'Shekhar_MUFC',
            screen_name: 'shekharlog',
            location: 'India',
            description: 'Big Sports Enthusiast | In love with @MANUTD | #TeamIndia | @DFB_Team Football | #CR7 | #MSD | Movies | Foodie | F1 | ForceIndia | Proud Indian |',
            url: 'https://t.co/0va3mvrN1I',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/0va3mvrN1I',
                    expanded_url: 'http://www.facebook.com/shekharlog',
                    display_url: 'facebook.com/shekharlog',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 723,
            friends_count: 881,
            listed_count: 20,
            created_at: 'Thu May 06 08:03:02 +0000 2010',
            favourites_count: 710,
            utc_offset: 19800,
            time_zone: 'Kolkata',
            geo_enabled: true,
            verified: false,
            statuses_count: 6600,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'C0DEED',
            profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000064601484/910df8a9d758d0d68b18a0988e629091.jpeg',
            profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000064601484/910df8a9d758d0d68b18a0988e629091.jpeg',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/844618594658996224/0a7Wh_o1_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/844618594658996224/0a7Wh_o1_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/140739269/1448163197',
            profile_link_color: '1281A3',
            profile_sidebar_border_color: 'FFFFFF',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 12:28:11 +0000 2017',
            id: 917003691273494500,
            id_str: '917003691273494528',
            text: "WATCH: Virat Kohli playing with MS Dhoni's daughter Ziva is the cutest thing you'll see today!… https://t.co/SmnHRYH3Pg",
            truncated: true,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [],
              urls: [
                {
                  url: 'https://t.co/SmnHRYH3Pg',
                  expanded_url: 'https://twitter.com/i/web/status/917003691273494528',
                  display_url: 'twitter.com/i/web/status/9…',
                  indices: [96, 119]
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 17710740,
              id_str: '17710740',
              name: 'DNA',
              screen_name: 'dna',
              location: 'India',
              description: 'Follow us for news, photos, videos and the latest trends from India and around the world. http://t.co/IZXefx3rSt',
              url: 'http://t.co/IZXefx3rSt',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'http://t.co/IZXefx3rSt',
                      expanded_url: 'http://www.dnaindia.com',
                      display_url: 'dnaindia.com',
                      indices: [0, 22]
                    }
                  ]
                },
                description: {
                  urls: [
                    {
                      url: 'http://t.co/IZXefx3rSt',
                      expanded_url: 'http://www.dnaindia.com',
                      display_url: 'dnaindia.com',
                      indices: [90, 112]
                    }
                  ]
                }
              },
              protected: false,
              followers_count: 1746066,
              friends_count: 354,
              listed_count: 3445,
              created_at: 'Fri Nov 28 15:39:38 +0000 2008',
              favourites_count: 92,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: false,
              verified: true,
              statuses_count: 414256,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'FFFFFF',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000175778006/yAHZPUM0.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000175778006/yAHZPUM0.jpeg',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/864432203370905601/yWa-6Q9O_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/864432203370905601/yWa-6Q9O_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/17710740/1507174704',
              profile_link_color: '1B95E0',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '542437',
              profile_text_color: 'C02942',
              profile_use_background_image: true,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'regular'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 8,
            favorite_count: 45,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 8,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:43 +0000 2017',
          id: 917018670249009200,
          id_str: '917018670249009153',
          text: 'RT @BrokenCricket: " Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'BrokenCricket',
                name: 'Broken Cricket',
                id: 907619970,
                id_str: '907619970',
                indices: [3, 17]
              }
            ],
            urls: []
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="https://mobile.twitter.com" rel="nofollow">Mobile Web (M2)</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 917018286910345200,
            id_str: '917018286910345218',
            name: 'BUY FOLLO₩ERS :yuk',
            screen_name: 'KilleanTessa',
            location: '',
            description: 'Check the first twěět for the Iiŉk \n\nref:riebfpnb',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 0,
            friends_count: 0,
            listed_count: 0,
            created_at: 'Sun Oct 08 13:26:11 +0000 2017',
            favourites_count: 0,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 279,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/917018585867853825/VzoICPy7_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/917018585867853825/VzoICPy7_normal.jpg',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: false,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 08:34:36 +0000 2017',
            id: 916944908337868800,
            id_str: '916944908337868800',
            text: '" Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
            truncated: false,
            entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 907619970,
              id_str: '907619970',
              name: 'Broken Cricket',
              screen_name: 'BrokenCricket',
              location: '',
              description: 'I was married to Sachin then fell in Love with Kohli now secretly dating AB',
              url: 'https://t.co/FBWn6henPH',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/FBWn6henPH',
                      expanded_url: 'https://www.facebook.com/BrokenCricketofficial/',
                      display_url: 'facebook.com/BrokenCricketo…',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 172513,
              friends_count: 87,
              listed_count: 246,
              created_at: 'Sat Oct 27 08:03:44 +0000 2012',
              favourites_count: 13615,
              utc_offset: 10800,
              time_zone: 'Athens',
              geo_enabled: false,
              verified: false,
              statuses_count: 31679,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/907619970/1498923596',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 363,
            favorite_count: 830,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 363,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:34 +0000 2017',
          id: 917018635352207400,
          id_str: '917018635352207360',
          text: 'RT @officialDhoniFC: These Smiles from our Inspiration, make our Super Sunday. #Dhoni #MSD #Ranchi #IndvAus #Mahi https://t.co/0mDXDrHobe',
          truncated: false,
          entities: {
            hashtags: [
              { text: 'Dhoni', indices: [79, 85] },
              { text: 'MSD', indices: [86, 90] },
              { text: 'Ranchi', indices: [91, 98] },
              { text: 'IndvAus', indices: [99, 107] },
              { text: 'Mahi', indices: [108, 113] }
            ],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'officialDhoniFC',
                name: '#Dhoni #Dhoni FC',
                id: 3019564778,
                id_str: '3019564778',
                indices: [3, 19]
              }
            ],
            urls: [],
            media: [
              {
                id: 916913274330812400,
                id_str: '916913274330812416',
                indices: [114, 137],
                media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                url: 'https://t.co/0mDXDrHobe',
                display_url: 'pic.twitter.com/0mDXDrHobe',
                expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                type: 'photo',
                sizes: {
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 1080, h: 1080, resize: 'fit' },
                  large: { w: 1080, h: 1080, resize: 'fit' },
                  small: { w: 680, h: 680, resize: 'fit' }
                },
                source_status_id: 916913305146474500,
                source_status_id_str: '916913305146474496',
                source_user_id: 1244185244,
                source_user_id_str: '1244185244'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916913274330812400,
                id_str: '916913274330812416',
                indices: [114, 137],
                media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                url: 'https://t.co/0mDXDrHobe',
                display_url: 'pic.twitter.com/0mDXDrHobe',
                expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                type: 'photo',
                sizes: {
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 1080, h: 1080, resize: 'fit' },
                  large: { w: 1080, h: 1080, resize: 'fit' },
                  small: { w: 680, h: 680, resize: 'fit' }
                },
                source_status_id: 916913305146474500,
                source_status_id_str: '916913305146474496',
                source_user_id: 1244185244,
                source_user_id_str: '1244185244'
              },
              {
                id: 916913293846966300,
                id_str: '916913293846966273',
                indices: [114, 137],
                media_url: 'http://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                url: 'https://t.co/0mDXDrHobe',
                display_url: 'pic.twitter.com/0mDXDrHobe',
                expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                type: 'photo',
                sizes: {
                  small: { w: 559, h: 547, resize: 'fit' },
                  large: { w: 559, h: 547, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 559, h: 547, resize: 'fit' }
                },
                source_status_id: 916913305146474500,
                source_status_id_str: '916913305146474496',
                source_user_id: 1244185244,
                source_user_id_str: '1244185244'
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 902940305745338400,
            id_str: '902940305745338369',
            name: 'karthikeyan Palanisa',
            screen_name: 'karthikeyanPa10',
            location: 'Tamil Nadu, India',
            description: 'Sports Cricketers and Commentators Cricketers and Commentators Sports News, TV and Scores Entertainment South Indian Breaking News CEOs Business & CEOs',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 5,
            friends_count: 175,
            listed_count: 0,
            created_at: 'Wed Aug 30 17:05:19 +0000 2017',
            favourites_count: 9,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 344,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/903264169541025792/lF6bzcvg_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/903264169541025792/lF6bzcvg_normal.jpg',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 06:35:05 +0000 2017',
            id: 916914828081582100,
            id_str: '916914828081582080',
            text: 'These Smiles from our Inspiration, make our Super Sunday. #Dhoni #MSD #Ranchi #IndvAus #Mahi https://t.co/0mDXDrHobe',
            truncated: false,
            entities: {
              hashtags: [
                { text: 'Dhoni', indices: [58, 64] },
                { text: 'MSD', indices: [65, 69] },
                { text: 'Ranchi', indices: [70, 77] },
                { text: 'IndvAus', indices: [78, 86] },
                { text: 'Mahi', indices: [87, 92] }
              ],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916913274330812400,
                  id_str: '916913274330812416',
                  indices: [93, 116],
                  media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  url: 'https://t.co/0mDXDrHobe',
                  display_url: 'pic.twitter.com/0mDXDrHobe',
                  expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  },
                  source_status_id: 916913305146474500,
                  source_status_id_str: '916913305146474496',
                  source_user_id: 1244185244,
                  source_user_id_str: '1244185244'
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916913274330812400,
                  id_str: '916913274330812416',
                  indices: [93, 116],
                  media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  url: 'https://t.co/0mDXDrHobe',
                  display_url: 'pic.twitter.com/0mDXDrHobe',
                  expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  },
                  source_status_id: 916913305146474500,
                  source_status_id_str: '916913305146474496',
                  source_user_id: 1244185244,
                  source_user_id_str: '1244185244'
                },
                {
                  id: 916913293846966300,
                  id_str: '916913293846966273',
                  indices: [93, 116],
                  media_url: 'http://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                  url: 'https://t.co/0mDXDrHobe',
                  display_url: 'pic.twitter.com/0mDXDrHobe',
                  expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                  type: 'photo',
                  sizes: {
                    small: { w: 559, h: 547, resize: 'fit' },
                    large: { w: 559, h: 547, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 559, h: 547, resize: 'fit' }
                  },
                  source_status_id: 916913305146474500,
                  source_status_id_str: '916913305146474496',
                  source_user_id: 1244185244,
                  source_user_id_str: '1244185244'
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="https://ifttt.com" rel="nofollow">IFTTT</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 3019564778,
              id_str: '3019564778',
              name: '#Dhoni #Dhoni FC',
              screen_name: 'officialDhoniFC',
              location: 'India √',
              description: '#MsDhoni #Dhoni\r\n#MsDhoni #Dhoni\r\n#MsDhoni #Dhoni\r\nMsDhoni Dhoni\r\n#MsDhoni #Dhoni\r\nMsDhoni Dhoni\r\n#MsDhoni #Dhoni\r\nMsDhoni Dhoni\r\nMsDhoni Dhoni\r\n#Dhoni  #Dhoni',
              url: 'https://t.co/CjQ5gS1lWY',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/CjQ5gS1lWY',
                      expanded_url: 'http://Espncricinfo.com',
                      display_url: 'Espncricinfo.com',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 35745,
              friends_count: 25,
              listed_count: 76,
              created_at: 'Sat Feb 14 11:51:57 +0000 2015',
              favourites_count: 1091,
              utc_offset: 18000,
              time_zone: 'Karachi',
              geo_enabled: false,
              verified: false,
              statuses_count: 26152,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/911771392013688832/tZEKmYJa_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/911771392013688832/tZEKmYJa_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/3019564778/1506218219',
              profile_link_color: 'FA743E',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 2,
            favorite_count: 10,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 2,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:16 +0000 2017',
          id: 917018558093156400,
          id_str: '917018558093156352',
          text: 'RT @DHONIism: Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
          truncated: false,
          entities: {
            hashtags: [{ text: 'Ziva', indices: [30, 35] }],
            symbols: [],
            user_mentions: [
              { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
            ],
            urls: [],
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'photo',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'video',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635',
                video_info: {
                  aspect_ratio: [20, 11],
                  duration_millis: 29267,
                  variants: [
                    {
                      bitrate: 320000,
                      content_type: 'video/mp4',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                    },
                    {
                      content_type: 'application/x-mpegURL',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                    }
                  ]
                },
                additional_media_info: {
                  monetizable: false,
                  source_user: {
                    id: 1727522635,
                    id_str: '1727522635',
                    name: 'DHONIsm ♥',
                    screen_name: 'DHONIism',
                    location: 'from Tamil Nadu to World :)',
                    description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                    url: 'https://t.co/VSrp5PXoY5',
                    entities: {
                      url: {
                        urls: [
                          {
                            url: 'https://t.co/VSrp5PXoY5',
                            expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                            display_url: 'facebook.com/BleedDhonIsm',
                            indices: [0, 23]
                          }
                        ]
                      },
                      description: { urls: [] }
                    },
                    protected: false,
                    followers_count: 133889,
                    friends_count: 23,
                    listed_count: 32,
                    created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                    favourites_count: 743,
                    utc_offset: 19800,
                    time_zone: 'New Delhi',
                    geo_enabled: true,
                    verified: false,
                    statuses_count: 7310,
                    lang: 'en',
                    contributors_enabled: false,
                    is_translator: false,
                    is_translation_enabled: false,
                    profile_background_color: 'C0DEED',
                    profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_tile: true,
                    profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                    profile_link_color: '0084B4',
                    profile_sidebar_border_color: 'FFFFFF',
                    profile_sidebar_fill_color: 'DDEEF6',
                    profile_text_color: '333333',
                    profile_use_background_image: true,
                    has_extended_profile: true,
                    default_profile: false,
                    default_profile_image: false,
                    following: false,
                    follow_request_sent: false,
                    notifications: false,
                    translator_type: 'none'
                  }
                }
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 585334504,
            id_str: '585334504',
            name: 'Mersal Bharath',
            screen_name: 'BharathTinz',
            location: 'Chennai, India',
            description: 'Thalapathy Veriyan! 😎😎😍 MSDian! ❤❤❤❤ Amateur photographer. 😁😝  Co-founder and Director of Photography : @sutta_vada',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 323,
            friends_count: 300,
            listed_count: 6,
            created_at: 'Sun May 20 03:44:18 +0000 2012',
            favourites_count: 63493,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 26125,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'C0DEED',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/916934292697104384/eKW4W9C1_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/916934292697104384/eKW4W9C1_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/585334504/1507449149',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 12:03:19 +0000 2017',
            id: 916997430331162600,
            id_str: '916997430331162624',
            text: 'Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Ziva', indices: [16, 21] }],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'photo',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'video',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  video_info: {
                    aspect_ratio: [20, 11],
                    duration_millis: 29267,
                    variants: [
                      {
                        bitrate: 320000,
                        content_type: 'video/mp4',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                      },
                      {
                        content_type: 'application/x-mpegURL',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                      }
                    ]
                  },
                  additional_media_info: { monetizable: false }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 1727522635,
              id_str: '1727522635',
              name: 'DHONIsm ♥',
              screen_name: 'DHONIism',
              location: 'from Tamil Nadu to World :)',
              description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
              url: 'https://t.co/VSrp5PXoY5',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/VSrp5PXoY5',
                      expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                      display_url: 'facebook.com/BleedDhonIsm',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 133889,
              friends_count: 23,
              listed_count: 32,
              created_at: 'Wed Sep 04 03:52:58 +0000 2013',
              favourites_count: 743,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 7310,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_tile: true,
              profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
              profile_link_color: '0084B4',
              profile_sidebar_border_color: 'FFFFFF',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 112,
            favorite_count: 309,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 112,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:26:59 +0000 2017',
          id: 917018488534732800,
          id_str: '917018488534732805',
          text: 'RT @BrokenCricket: " Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'BrokenCricket',
                name: 'Broken Cricket',
                id: 907619970,
                id_str: '907619970',
                indices: [3, 17]
              }
            ],
            urls: []
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 144089436,
            id_str: '144089436',
            name: 'Jegan',
            screen_name: 'IamJegan',
            location: 'Tuticorin / Trichy / Chennai',
            description: 'A Big Fanatic of @SGanguly99. Want him to Coach Team India & Lift the World Cup! Thala Ajith Addict!',
            url: 'https://t.co/lyD9bn1TXG',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/lyD9bn1TXG',
                    expanded_url: 'http://thecineket.com',
                    display_url: 'thecineket.com',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 3270,
            friends_count: 281,
            listed_count: 15,
            created_at: 'Sat May 15 07:56:02 +0000 2010',
            favourites_count: 778,
            utc_offset: 19800,
            time_zone: 'Chennai',
            geo_enabled: true,
            verified: false,
            statuses_count: 31673,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '352726',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme5/bg.gif',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme5/bg.gif',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/906201523725623296/pHeFZ-tQ_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/906201523725623296/pHeFZ-tQ_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/144089436/1436104530',
            profile_link_color: 'D02B55',
            profile_sidebar_border_color: '829D5E',
            profile_sidebar_fill_color: '99CC33',
            profile_text_color: '3E4415',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 08:34:36 +0000 2017',
            id: 916944908337868800,
            id_str: '916944908337868800',
            text: '" Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
            truncated: false,
            entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 907619970,
              id_str: '907619970',
              name: 'Broken Cricket',
              screen_name: 'BrokenCricket',
              location: '',
              description: 'I was married to Sachin then fell in Love with Kohli now secretly dating AB',
              url: 'https://t.co/FBWn6henPH',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/FBWn6henPH',
                      expanded_url: 'https://www.facebook.com/BrokenCricketofficial/',
                      display_url: 'facebook.com/BrokenCricketo…',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 172513,
              friends_count: 87,
              listed_count: 246,
              created_at: 'Sat Oct 27 08:03:44 +0000 2012',
              favourites_count: 13615,
              utc_offset: 10800,
              time_zone: 'Athens',
              geo_enabled: false,
              verified: false,
              statuses_count: 31679,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/907619970/1498923596',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 363,
            favorite_count: 830,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 363,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:26:34 +0000 2017',
          id: 917018382884495400,
          id_str: '917018382884495360',
          text: 'RT @DHONIism: Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
          truncated: false,
          entities: {
            hashtags: [{ text: 'Ziva', indices: [30, 35] }],
            symbols: [],
            user_mentions: [
              { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
            ],
            urls: [],
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'photo',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'video',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635',
                video_info: {
                  aspect_ratio: [20, 11],
                  duration_millis: 29267,
                  variants: [
                    {
                      bitrate: 320000,
                      content_type: 'video/mp4',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                    },
                    {
                      content_type: 'application/x-mpegURL',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                    }
                  ]
                },
                additional_media_info: {
                  monetizable: false,
                  source_user: {
                    id: 1727522635,
                    id_str: '1727522635',
                    name: 'DHONIsm ♥',
                    screen_name: 'DHONIism',
                    location: 'from Tamil Nadu to World :)',
                    description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                    url: 'https://t.co/VSrp5PXoY5',
                    entities: {
                      url: {
                        urls: [
                          {
                            url: 'https://t.co/VSrp5PXoY5',
                            expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                            display_url: 'facebook.com/BleedDhonIsm',
                            indices: [0, 23]
                          }
                        ]
                      },
                      description: { urls: [] }
                    },
                    protected: false,
                    followers_count: 133889,
                    friends_count: 23,
                    listed_count: 32,
                    created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                    favourites_count: 743,
                    utc_offset: 19800,
                    time_zone: 'New Delhi',
                    geo_enabled: true,
                    verified: false,
                    statuses_count: 7310,
                    lang: 'en',
                    contributors_enabled: false,
                    is_translator: false,
                    is_translation_enabled: false,
                    profile_background_color: 'C0DEED',
                    profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_tile: true,
                    profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                    profile_link_color: '0084B4',
                    profile_sidebar_border_color: 'FFFFFF',
                    profile_sidebar_fill_color: 'DDEEF6',
                    profile_text_color: '333333',
                    profile_use_background_image: true,
                    has_extended_profile: true,
                    default_profile: false,
                    default_profile_image: false,
                    following: false,
                    follow_request_sent: false,
                    notifications: false,
                    translator_type: 'none'
                  }
                }
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 3174923622,
            id_str: '3174923622',
            name: 'Aяνιηтн',
            screen_name: 'ArvinthVj',
            location: 'Erode, India',
            description: 'சராசரி இந்திய ப்ரஜை || Mech || Cine | Tech freak\n|| A man in search is the Man Indeed || Proud Gixxeriann😎',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 5112,
            friends_count: 465,
            listed_count: 22,
            created_at: 'Sun Apr 26 05:37:28 +0000 2015',
            favourites_count: 16446,
            utc_offset: 19800,
            time_zone: 'New Delhi',
            geo_enabled: true,
            verified: false,
            statuses_count: 28355,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '642D8B',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme10/bg.gif',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme10/bg.gif',
            profile_background_tile: true,
            profile_image_url: 'http://pbs.twimg.com/profile_images/911612405133615104/Lmh9E_-S_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/911612405133615104/Lmh9E_-S_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/3174923622/1505735402',
            profile_link_color: 'FF0000',
            profile_sidebar_border_color: '65B0DA',
            profile_sidebar_fill_color: '7AC3EE',
            profile_text_color: '3D1957',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 12:03:19 +0000 2017',
            id: 916997430331162600,
            id_str: '916997430331162624',
            text: 'Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Ziva', indices: [16, 21] }],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'photo',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'video',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  video_info: {
                    aspect_ratio: [20, 11],
                    duration_millis: 29267,
                    variants: [
                      {
                        bitrate: 320000,
                        content_type: 'video/mp4',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                      },
                      {
                        content_type: 'application/x-mpegURL',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                      }
                    ]
                  },
                  additional_media_info: { monetizable: false }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 1727522635,
              id_str: '1727522635',
              name: 'DHONIsm ♥',
              screen_name: 'DHONIism',
              location: 'from Tamil Nadu to World :)',
              description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
              url: 'https://t.co/VSrp5PXoY5',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/VSrp5PXoY5',
                      expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                      display_url: 'facebook.com/BleedDhonIsm',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 133889,
              friends_count: 23,
              listed_count: 32,
              created_at: 'Wed Sep 04 03:52:58 +0000 2013',
              favourites_count: 743,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 7310,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_tile: true,
              profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
              profile_link_color: '0084B4',
              profile_sidebar_border_color: 'FFFFFF',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 112,
            favorite_count: 309,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 112,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:26:30 +0000 2017',
          id: 917018367281655800,
          id_str: '917018367281655808',
          text: 'RT @FirstCric: "Had Sourav Ganguly not promoted Dhoni to No 3, he wouldn’t have become such a great player," says Virender Sehwag\nhttps://t…',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'FirstCric',
                name: 'FirstCricket',
                id: 888369388906135600,
                id_str: '888369388906135552',
                indices: [3, 13]
              }
            ],
            urls: []
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 1348006476,
            id_str: '1348006476',
            name: 'A',
            screen_name: 'Arijitme',
            location: 'India',
            description: '#Believeinyourself#NeverGiveup inlife#Entrepreneur#Dreamer#Achiever#Chelsea#Moviebuff#PremierLeague.. Events - DM for Enquiries',
            url: 'https://t.co/SE8gkxhOkj',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/SE8gkxhOkj',
                    expanded_url: 'https://movewanderlust.com',
                    display_url: 'movewanderlust.com',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 132,
            friends_count: 197,
            listed_count: 10,
            created_at: 'Sat Apr 13 00:26:28 +0000 2013',
            favourites_count: 2730,
            utc_offset: 19800,
            time_zone: 'New Delhi',
            geo_enabled: true,
            verified: false,
            statuses_count: 6076,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '022330',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme15/bg.png',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme15/bg.png',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/908981012352212992/Vf0kJ9Ha_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/908981012352212992/Vf0kJ9Ha_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/1348006476/1498468283',
            profile_link_color: '0084B4',
            profile_sidebar_border_color: 'A8C7F7',
            profile_sidebar_fill_color: 'C0DFEC',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 13:21:10 +0000 2017',
            id: 917017025662263300,
            id_str: '917017025662263296',
            text: '"Had Sourav Ganguly not promoted Dhoni to No 3, he wouldn’t have become such a great player," says Virender Sehwag\nhttps://t.co/FIANVgKeRI',
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [],
              urls: [
                {
                  url: 'https://t.co/FIANVgKeRI',
                  expanded_url: 'http://www.firstpost.com/firstcricket/sports-news/sourav-ganguly-sacrificed-his-batting-spot-to-make-ms-dhoni-a-great-player-says-virender-sehwag-4121625.html',
                  display_url: 'firstpost.com/firstcricket/s…',
                  indices: [115, 138]
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="https://about.twitter.com/products/tweetdeck" rel="nofollow">TweetDeck</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 888369388906135600,
              id_str: '888369388906135552',
              name: 'FirstCricket',
              screen_name: 'FirstCric',
              location: '',
              description: 'Bringing you live updates, breaking news, opinions and photos from the world of cricket',
              url: 'https://t.co/X7UPznamYz',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/X7UPznamYz',
                      expanded_url: 'http://www.firstpost.com/firstcricket/',
                      display_url: 'firstpost.com/firstcricket/',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 603,
              friends_count: 47,
              listed_count: 9,
              created_at: 'Fri Jul 21 12:05:42 +0000 2017',
              favourites_count: 0,
              utc_offset: -25200,
              time_zone: 'Pacific Time (US & Canada)',
              geo_enabled: false,
              verified: false,
              statuses_count: 3114,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/888370591685726208/Jr6laI3X_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/888370591685726208/Jr6laI3X_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/888369388906135552/1502726156',
              profile_link_color: 'A6CE39',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 3,
            favorite_count: 2,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 3,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:25:55 +0000 2017',
          id: 917018217792417800,
          id_str: '917018217792417792',
          text: 'RT @DHONIism: Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
          truncated: false,
          entities: {
            hashtags: [{ text: 'Ziva', indices: [30, 35] }],
            symbols: [],
            user_mentions: [
              { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
            ],
            urls: [],
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'photo',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'video',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635',
                video_info: {
                  aspect_ratio: [20, 11],
                  duration_millis: 29267,
                  variants: [
                    {
                      bitrate: 320000,
                      content_type: 'video/mp4',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                    },
                    {
                      content_type: 'application/x-mpegURL',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                    }
                  ]
                },
                additional_media_info: {
                  monetizable: false,
                  source_user: {
                    id: 1727522635,
                    id_str: '1727522635',
                    name: 'DHONIsm ♥',
                    screen_name: 'DHONIism',
                    location: 'from Tamil Nadu to World :)',
                    description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                    url: 'https://t.co/VSrp5PXoY5',
                    entities: {
                      url: {
                        urls: [
                          {
                            url: 'https://t.co/VSrp5PXoY5',
                            expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                            display_url: 'facebook.com/BleedDhonIsm',
                            indices: [0, 23]
                          }
                        ]
                      },
                      description: { urls: [] }
                    },
                    protected: false,
                    followers_count: 133889,
                    friends_count: 23,
                    listed_count: 32,
                    created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                    favourites_count: 743,
                    utc_offset: 19800,
                    time_zone: 'New Delhi',
                    geo_enabled: true,
                    verified: false,
                    statuses_count: 7310,
                    lang: 'en',
                    contributors_enabled: false,
                    is_translator: false,
                    is_translation_enabled: false,
                    profile_background_color: 'C0DEED',
                    profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_tile: true,
                    profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                    profile_link_color: '0084B4',
                    profile_sidebar_border_color: 'FFFFFF',
                    profile_sidebar_fill_color: 'DDEEF6',
                    profile_text_color: '333333',
                    profile_use_background_image: true,
                    has_extended_profile: true,
                    default_profile: false,
                    default_profile_image: false,
                    following: false,
                    follow_request_sent: false,
                    notifications: false,
                    translator_type: 'none'
                  }
                }
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 871408030474162200,
            id_str: '871408030474162176',
            name: 'MS Dhoni',
            screen_name: 'MSDhoni85350822',
            location: 'Bengaluru South, India',
            description: "I love my country india💙\n                                            I'm a fan of MS Dhoni and Rajinikanth..💖\n                  👉Pawan kalyan is my Heart💖..",
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 76,
            friends_count: 381,
            listed_count: 1,
            created_at: 'Sun Jun 04 16:47:19 +0000 2017',
            favourites_count: 3276,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 2141,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/916849356094844928/i7JSZkxX_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/916849356094844928/i7JSZkxX_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/871408030474162176/1502765044',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 12:03:19 +0000 2017',
            id: 916997430331162600,
            id_str: '916997430331162624',
            text: 'Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Ziva', indices: [16, 21] }],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'photo',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'video',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  video_info: {
                    aspect_ratio: [20, 11],
                    duration_millis: 29267,
                    variants: [
                      {
                        bitrate: 320000,
                        content_type: 'video/mp4',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                      },
                      {
                        content_type: 'application/x-mpegURL',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                      }
                    ]
                  },
                  additional_media_info: { monetizable: false }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 1727522635,
              id_str: '1727522635',
              name: 'DHONIsm ♥',
              screen_name: 'DHONIism',
              location: 'from Tamil Nadu to World :)',
              description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
              url: 'https://t.co/VSrp5PXoY5',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/VSrp5PXoY5',
                      expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                      display_url: 'facebook.com/BleedDhonIsm',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 133889,
              friends_count: 23,
              listed_count: 32,
              created_at: 'Wed Sep 04 03:52:58 +0000 2013',
              favourites_count: 743,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 7310,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_tile: true,
              profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
              profile_link_color: '0084B4',
              profile_sidebar_border_color: 'FFFFFF',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 112,
            favorite_count: 309,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 112,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        }
      ]
    },
    searchStatus: { loaded: false, error: false, errorMsg: '' },
    itemData: { text: '', username: '' }
  });
});
test('ADD_FIND_ONE', () => {
  let state;
  state = reducers(
    {
      searchTerm: 'dhoni',
      searchData: {
        data: [
          {
            created_at: 'Sun Oct 08 13:29:09 +0000 2017',
            id: 917019033584787500,
            id_str: '917019033584787456',
            text: "CUTE | Virat Kohli having fun with MS Dhoni's daughter Ziva | Must Watch | Virat Fans.: https://t.co/E11Ex214lc via @YouTube",
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [
                { screen_name: 'YouTube', name: 'YouTube', id: 10228272, id_str: '10228272', indices: [116, 124] }
              ],
              urls: [
                {
                  url: 'https://t.co/E11Ex214lc',
                  expanded_url: 'http://youtu.be/mtflMTy9r7E?a',
                  display_url: 'youtu.be/mtflMTy9r7E?a',
                  indices: [88, 111]
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://www.google.com/" rel="nofollow">Google</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 711870517,
              id_str: '711870517',
              name: 'Rockstar',
              screen_name: 'shivamrocks02',
              location: 'India',
              description: 'Just living my dreams.',
              url: null,
              entities: { description: { urls: [] } },
              protected: false,
              followers_count: 4750,
              friends_count: 490,
              listed_count: 30,
              created_at: 'Mon Jul 23 05:41:19 +0000 2012',
              favourites_count: 24671,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: false,
              verified: false,
              statuses_count: 49357,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme9/bg.gif',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme9/bg.gif',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/790939117039214592/IcLtgmBx_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/790939117039214592/IcLtgmBx_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/711870517/1436525719',
              profile_link_color: '1B95E0',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 0,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:28:47 +0000 2017',
            id: 917018941968539600,
            id_str: '917018941968539648',
            text: 'How Sourav Ganguly played his part in making of the legend of MS Dhoni https://t.co/qVbpmHaM4A',
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [],
              urls: [
                {
                  url: 'https://t.co/qVbpmHaM4A',
                  expanded_url: 'http://ift.tt/2kvt1XM',
                  display_url: 'ift.tt/2kvt1XM',
                  indices: [71, 94]
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="https://ifttt.com" rel="nofollow">IFTTT</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 178544713,
              id_str: '178544713',
              name: 'NewsStory',
              screen_name: 'NewsStoryIndia',
              location: 'India',
              description: 'Follow us now to get news from more than 100 news channels.No copyright Direct references to news content. Follow Now.\nProudly Made in India.जय हिन्द !! जय भारत',
              url: 'https://t.co/Wtiy0ExqsI',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/Wtiy0ExqsI',
                      expanded_url: 'http://newsstory.webnode.com',
                      display_url: 'newsstory.webnode.com',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 4601,
              friends_count: 28,
              listed_count: 27,
              created_at: 'Sun Aug 15 01:58:36 +0000 2010',
              favourites_count: 789,
              utc_offset: -25200,
              time_zone: 'Pacific Time (US & Canada)',
              geo_enabled: false,
              verified: false,
              statuses_count: 114332,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme9/bg.gif',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme9/bg.gif',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/829323773769818113/0Z6sbzum_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/829323773769818113/0Z6sbzum_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/178544713/1475310281',
              profile_link_color: '3B94D9',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 0,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:28:25 +0000 2017',
            id: 917018846690648000,
            id_str: '917018846690648064',
            text: 'RT @DHONIism: VVS Laxman - "Not only in Ranchi or in India, Dhoni will get the loudest cheer in overseas also &amp; he is an absolute Legend of…',
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [
                { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
              ],
              urls: []
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 833203035690192900,
              id_str: '833203035690192896',
              name: 'THE SALMAN KHAN 🔛🔝',
              screen_name: 'SalmanKaStarDom',
              location: 'Under Construction',
              description: "👉 #TIGER  🙏\nSalman Khan's FAN  @BeingSalmanKhan  #Tiger_Zinda_Hai on 22nd Dec 2017. Following Only Salman Khan's Fans",
              url: 'https://t.co/5JUl38Jryy',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/5JUl38Jryy',
                      expanded_url: 'http://SaraJagGhoomeyaLekinInkeJaisaNaKoi.com',
                      display_url: 'SaraJagGhoomeyaLekinInkeJaisaNaKoi.com',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 498,
              friends_count: 203,
              listed_count: 0,
              created_at: 'Sun Feb 19 06:34:18 +0000 2017',
              favourites_count: 8144,
              utc_offset: null,
              time_zone: null,
              geo_enabled: false,
              verified: false,
              statuses_count: 5880,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'F5F8FA',
              profile_background_image_url: null,
              profile_background_image_url_https: null,
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/912237357692215296/TTCvH5V4_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/912237357692215296/TTCvH5V4_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/833203035690192896/1506143031',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sat Oct 07 16:53:40 +0000 2017',
              id: 916708115302686700,
              id_str: '916708115302686720',
              text: 'VVS Laxman - "Not only in Ranchi or in India, Dhoni will get the loudest cheer in overseas also &amp; he is an absolute Legend of the game"',
              truncated: false,
              entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 1727522635,
                id_str: '1727522635',
                name: 'DHONIsm ♥',
                screen_name: 'DHONIism',
                location: 'from Tamil Nadu to World :)',
                description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                url: 'https://t.co/VSrp5PXoY5',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/VSrp5PXoY5',
                        expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                        display_url: 'facebook.com/BleedDhonIsm',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: { urls: [] }
                },
                protected: false,
                followers_count: 133889,
                friends_count: 23,
                listed_count: 32,
                created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                favourites_count: 743,
                utc_offset: 19800,
                time_zone: 'New Delhi',
                geo_enabled: true,
                verified: false,
                statuses_count: 7310,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: 'C0DEED',
                profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                profile_background_tile: true,
                profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                profile_link_color: '0084B4',
                profile_sidebar_border_color: 'FFFFFF',
                profile_sidebar_fill_color: 'DDEEF6',
                profile_text_color: '333333',
                profile_use_background_image: true,
                has_extended_profile: true,
                default_profile: false,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 217,
              favorite_count: 562,
              favorited: false,
              retweeted: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 217,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:28:23 +0000 2017',
            id: 917018841133195300,
            id_str: '917018841133195265',
            text: 'RT @msdfansofficial: His Smile is reason for billions Smile😇\n#Dhoni #INDvAUS https://t.co/vBVso0kX3V',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Dhoni', indices: [61, 67] }, { text: 'INDvAUS', indices: [68, 76] }],
              symbols: [],
              user_mentions: [
                {
                  screen_name: 'msdfansofficial',
                  name: 'MS Dhoni Fans #Dhoni',
                  id: 2962738476,
                  id_str: '2962738476',
                  indices: [3, 19]
                }
              ],
              urls: [],
              media: [
                {
                  id: 916886912534667300,
                  id_str: '916886912534667265',
                  indices: [77, 100],
                  media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  url: 'https://t.co/vBVso0kX3V',
                  display_url: 'pic.twitter.com/vBVso0kX3V',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  },
                  source_status_id: 916886937209675800,
                  source_status_id_str: '916886937209675776',
                  source_user_id: 2962738476,
                  source_user_id_str: '2962738476'
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916886912534667300,
                  id_str: '916886912534667265',
                  indices: [77, 100],
                  media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  url: 'https://t.co/vBVso0kX3V',
                  display_url: 'pic.twitter.com/vBVso0kX3V',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  },
                  source_status_id: 916886937209675800,
                  source_status_id_str: '916886937209675776',
                  source_user_id: 2962738476,
                  source_user_id_str: '2962738476'
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Lite</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 821266766341017600,
              id_str: '821266766341017600',
              name: 'Varunmsdian77',
              screen_name: 'Varunmsdian77',
              location: 'Tamilnadu,INDIA',
              description: 'Proud to be an msdian. A big fan of sivakarthikeyanism.',
              url: null,
              entities: { description: { urls: [] } },
              protected: false,
              followers_count: 18,
              friends_count: 94,
              listed_count: 0,
              created_at: 'Tue Jan 17 08:03:50 +0000 2017',
              favourites_count: 389,
              utc_offset: null,
              time_zone: null,
              geo_enabled: false,
              verified: false,
              statuses_count: 1024,
              lang: 'en-gb',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'F5F8FA',
              profile_background_image_url: null,
              profile_background_image_url_https: null,
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: false,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 04:44:15 +0000 2017',
              id: 916886937209675800,
              id_str: '916886937209675776',
              text: 'His Smile is reason for billions Smile😇\n#Dhoni #INDvAUS https://t.co/vBVso0kX3V',
              truncated: false,
              entities: {
                hashtags: [{ text: 'Dhoni', indices: [40, 46] }, { text: 'INDvAUS', indices: [47, 55] }],
                symbols: [],
                user_mentions: [],
                urls: [],
                media: [
                  {
                    id: 916886912534667300,
                    id_str: '916886912534667265',
                    indices: [56, 79],
                    media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                    media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                    url: 'https://t.co/vBVso0kX3V',
                    display_url: 'pic.twitter.com/vBVso0kX3V',
                    expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                    type: 'photo',
                    sizes: {
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      medium: { w: 1080, h: 1080, resize: 'fit' },
                      large: { w: 1080, h: 1080, resize: 'fit' },
                      small: { w: 680, h: 680, resize: 'fit' }
                    }
                  }
                ]
              },
              extended_entities: {
                media: [
                  {
                    id: 916886912534667300,
                    id_str: '916886912534667265',
                    indices: [56, 79],
                    media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                    media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                    url: 'https://t.co/vBVso0kX3V',
                    display_url: 'pic.twitter.com/vBVso0kX3V',
                    expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                    type: 'photo',
                    sizes: {
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      medium: { w: 1080, h: 1080, resize: 'fit' },
                      large: { w: 1080, h: 1080, resize: 'fit' },
                      small: { w: 680, h: 680, resize: 'fit' }
                    }
                  }
                ]
              },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 2962738476,
                id_str: '2962738476',
                name: 'MS Dhoni Fans #Dhoni',
                screen_name: 'msdfansofficial',
                location: 'Ranchi, India',
                description: 'Official Fan Club of Mahendra Singh Dhoni. insights & updates on MS Dhoni. #Dhoni @msdhoni https://t.co/DxND6ychgJ',
                url: 'https://t.co/vIL4WfRXaa',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/vIL4WfRXaa',
                        expanded_url: 'https://www.facebook.com/MSDhoniFansOfficial',
                        display_url: 'facebook.com/MSDhoniFansOff…',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: {
                    urls: [
                      {
                        url: 'https://t.co/DxND6ychgJ',
                        expanded_url: 'https://www.instagram.com/msdhonifansofficial/',
                        display_url: 'instagram.com/msdhonifansoff…',
                        indices: [91, 114]
                      }
                    ]
                  }
                },
                protected: false,
                followers_count: 37410,
                friends_count: 28,
                listed_count: 24,
                created_at: 'Wed Jan 07 09:42:39 +0000 2015',
                favourites_count: 54,
                utc_offset: 19800,
                time_zone: 'Chennai',
                geo_enabled: true,
                verified: false,
                statuses_count: 5483,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: '000000',
                profile_background_image_url: 'http://abs.twimg.com/images/themes/theme16/bg.gif',
                profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme16/bg.gif',
                profile_background_tile: false,
                profile_image_url: 'http://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/2962738476/1493447487',
                profile_link_color: '73CDF7',
                profile_sidebar_border_color: '000000',
                profile_sidebar_fill_color: '000000',
                profile_text_color: '000000',
                profile_use_background_image: false,
                has_extended_profile: false,
                default_profile: false,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 51,
              favorite_count: 357,
              favorited: false,
              retweeted: false,
              possibly_sensitive: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 51,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:28:15 +0000 2017',
            id: 917018808253952000,
            id_str: '917018808253952002',
            text: 'Virat Kohli’s adorable moments with MS Dhoni’s daughter Ziva.. https://t.co/1cQiRsZOff',
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [],
              urls: [
                {
                  url: 'https://t.co/1cQiRsZOff',
                  expanded_url: 'http://indianexpress.com/photos/sports-gallery/virat-kohlis-adorable-moments-with-ms-dhonis-daughter-ziva-pics-4880713/',
                  display_url: 'indianexpress.com/photos/sports-…',
                  indices: [63, 86]
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://NewsBoss.in" rel="nofollow">NewsBoss.in</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 753259712028696600,
              id_str: '753259712028696576',
              name: 'NewsBoss.in',
              screen_name: 'NewsBossIndia',
              location: '',
              description: 'News, you can choose!',
              url: 'https://t.co/y9fpUd38h3',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/y9fpUd38h3',
                      expanded_url: 'http://NewsBoss.in',
                      display_url: 'NewsBoss.in',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 945,
              friends_count: 1,
              listed_count: 219,
              created_at: 'Wed Jul 13 16:08:05 +0000 2016',
              favourites_count: 1,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: false,
              verified: false,
              statuses_count: 1175250,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/753260679692333057/AS4Xiw4q_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/753260679692333057/AS4Xiw4q_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/753259712028696576/1468426410',
              profile_link_color: 'E81C4F',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 0,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: true,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:27:54 +0000 2017',
            id: 917018717048913900,
            id_str: '917018717048913920',
            text: 'RT @msdfansofficial: That smile ♥\n#Dhoni #Ranchi #INDvsAUS https://t.co/mGpu18BGw6',
            truncated: false,
            entities: {
              hashtags: [
                { text: 'Dhoni', indices: [34, 40] },
                { text: 'Ranchi', indices: [41, 48] },
                { text: 'INDvsAUS', indices: [49, 58] }
              ],
              symbols: [],
              user_mentions: [
                {
                  screen_name: 'msdfansofficial',
                  name: 'MS Dhoni Fans #Dhoni',
                  id: 2962738476,
                  id_str: '2962738476',
                  indices: [3, 19]
                }
              ],
              urls: [],
              media: [
                {
                  id: 916843458215559200,
                  id_str: '916843458215559168',
                  indices: [59, 82],
                  media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  url: 'https://t.co/mGpu18BGw6',
                  display_url: 'pic.twitter.com/mGpu18BGw6',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                  type: 'photo',
                  sizes: {
                    small: { w: 680, h: 383, resize: 'fit' },
                    medium: { w: 1200, h: 675, resize: 'fit' },
                    large: { w: 1280, h: 720, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' }
                  },
                  source_status_id: 916843468424601600,
                  source_status_id_str: '916843468424601601',
                  source_user_id: 2962738476,
                  source_user_id_str: '2962738476'
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916843458215559200,
                  id_str: '916843458215559168',
                  indices: [59, 82],
                  media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  url: 'https://t.co/mGpu18BGw6',
                  display_url: 'pic.twitter.com/mGpu18BGw6',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                  type: 'photo',
                  sizes: {
                    small: { w: 680, h: 383, resize: 'fit' },
                    medium: { w: 1200, h: 675, resize: 'fit' },
                    large: { w: 1280, h: 720, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' }
                  },
                  source_status_id: 916843468424601600,
                  source_status_id_str: '916843468424601601',
                  source_user_id: 2962738476,
                  source_user_id_str: '2962738476'
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Lite</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 821266766341017600,
              id_str: '821266766341017600',
              name: 'Varunmsdian77',
              screen_name: 'Varunmsdian77',
              location: 'Tamilnadu,INDIA',
              description: 'Proud to be an msdian. A big fan of sivakarthikeyanism.',
              url: null,
              entities: { description: { urls: [] } },
              protected: false,
              followers_count: 18,
              friends_count: 94,
              listed_count: 0,
              created_at: 'Tue Jan 17 08:03:50 +0000 2017',
              favourites_count: 389,
              utc_offset: null,
              time_zone: null,
              geo_enabled: false,
              verified: false,
              statuses_count: 1024,
              lang: 'en-gb',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'F5F8FA',
              profile_background_image_url: null,
              profile_background_image_url_https: null,
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: false,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 01:51:31 +0000 2017',
              id: 916843468424601600,
              id_str: '916843468424601601',
              text: 'That smile ♥\n#Dhoni #Ranchi #INDvsAUS https://t.co/mGpu18BGw6',
              truncated: false,
              entities: {
                hashtags: [
                  { text: 'Dhoni', indices: [13, 19] },
                  { text: 'Ranchi', indices: [20, 27] },
                  { text: 'INDvsAUS', indices: [28, 37] }
                ],
                symbols: [],
                user_mentions: [],
                urls: [],
                media: [
                  {
                    id: 916843458215559200,
                    id_str: '916843458215559168',
                    indices: [38, 61],
                    media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                    media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                    url: 'https://t.co/mGpu18BGw6',
                    display_url: 'pic.twitter.com/mGpu18BGw6',
                    expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                    type: 'photo',
                    sizes: {
                      small: { w: 680, h: 383, resize: 'fit' },
                      medium: { w: 1200, h: 675, resize: 'fit' },
                      large: { w: 1280, h: 720, resize: 'fit' },
                      thumb: { w: 150, h: 150, resize: 'crop' }
                    }
                  }
                ]
              },
              extended_entities: {
                media: [
                  {
                    id: 916843458215559200,
                    id_str: '916843458215559168',
                    indices: [38, 61],
                    media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                    media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                    url: 'https://t.co/mGpu18BGw6',
                    display_url: 'pic.twitter.com/mGpu18BGw6',
                    expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                    type: 'photo',
                    sizes: {
                      small: { w: 680, h: 383, resize: 'fit' },
                      medium: { w: 1200, h: 675, resize: 'fit' },
                      large: { w: 1280, h: 720, resize: 'fit' },
                      thumb: { w: 150, h: 150, resize: 'crop' }
                    }
                  }
                ]
              },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 2962738476,
                id_str: '2962738476',
                name: 'MS Dhoni Fans #Dhoni',
                screen_name: 'msdfansofficial',
                location: 'Ranchi, India',
                description: 'Official Fan Club of Mahendra Singh Dhoni. insights & updates on MS Dhoni. #Dhoni @msdhoni https://t.co/DxND6ychgJ',
                url: 'https://t.co/vIL4WfRXaa',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/vIL4WfRXaa',
                        expanded_url: 'https://www.facebook.com/MSDhoniFansOfficial',
                        display_url: 'facebook.com/MSDhoniFansOff…',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: {
                    urls: [
                      {
                        url: 'https://t.co/DxND6ychgJ',
                        expanded_url: 'https://www.instagram.com/msdhonifansofficial/',
                        display_url: 'instagram.com/msdhonifansoff…',
                        indices: [91, 114]
                      }
                    ]
                  }
                },
                protected: false,
                followers_count: 37410,
                friends_count: 28,
                listed_count: 24,
                created_at: 'Wed Jan 07 09:42:39 +0000 2015',
                favourites_count: 54,
                utc_offset: 19800,
                time_zone: 'Chennai',
                geo_enabled: true,
                verified: false,
                statuses_count: 5483,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: '000000',
                profile_background_image_url: 'http://abs.twimg.com/images/themes/theme16/bg.gif',
                profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme16/bg.gif',
                profile_background_tile: false,
                profile_image_url: 'http://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/2962738476/1493447487',
                profile_link_color: '73CDF7',
                profile_sidebar_border_color: '000000',
                profile_sidebar_fill_color: '000000',
                profile_text_color: '000000',
                profile_use_background_image: false,
                has_extended_profile: false,
                default_profile: false,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 55,
              favorite_count: 382,
              favorited: false,
              retweeted: false,
              possibly_sensitive: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 55,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:27:44 +0000 2017',
            id: 917018676200579100,
            id_str: '917018676200579073',
            text: "RT @dna: WATCH: Virat Kohli playing with MS Dhoni's daughter Ziva is the cutest thing you'll see today! https://t.co/rsAovpXzIA https://t.c…",
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [{ screen_name: 'dna', name: 'DNA', id: 17710740, id_str: '17710740', indices: [3, 7] }],
              urls: [
                {
                  url: 'https://t.co/rsAovpXzIA',
                  expanded_url: 'http://dnai.in/f6r2',
                  display_url: 'dnai.in/f6r2',
                  indices: [104, 127]
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 140739269,
              id_str: '140739269',
              name: 'Shekhar_MUFC',
              screen_name: 'shekharlog',
              location: 'India',
              description: 'Big Sports Enthusiast | In love with @MANUTD | #TeamIndia | @DFB_Team Football | #CR7 | #MSD | Movies | Foodie | F1 | ForceIndia | Proud Indian |',
              url: 'https://t.co/0va3mvrN1I',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/0va3mvrN1I',
                      expanded_url: 'http://www.facebook.com/shekharlog',
                      display_url: 'facebook.com/shekharlog',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 723,
              friends_count: 881,
              listed_count: 20,
              created_at: 'Thu May 06 08:03:02 +0000 2010',
              favourites_count: 710,
              utc_offset: 19800,
              time_zone: 'Kolkata',
              geo_enabled: true,
              verified: false,
              statuses_count: 6600,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000064601484/910df8a9d758d0d68b18a0988e629091.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000064601484/910df8a9d758d0d68b18a0988e629091.jpeg',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/844618594658996224/0a7Wh_o1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/844618594658996224/0a7Wh_o1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/140739269/1448163197',
              profile_link_color: '1281A3',
              profile_sidebar_border_color: 'FFFFFF',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 12:28:11 +0000 2017',
              id: 917003691273494500,
              id_str: '917003691273494528',
              text: "WATCH: Virat Kohli playing with MS Dhoni's daughter Ziva is the cutest thing you'll see today!… https://t.co/SmnHRYH3Pg",
              truncated: true,
              entities: {
                hashtags: [],
                symbols: [],
                user_mentions: [],
                urls: [
                  {
                    url: 'https://t.co/SmnHRYH3Pg',
                    expanded_url: 'https://twitter.com/i/web/status/917003691273494528',
                    display_url: 'twitter.com/i/web/status/9…',
                    indices: [96, 119]
                  }
                ]
              },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 17710740,
                id_str: '17710740',
                name: 'DNA',
                screen_name: 'dna',
                location: 'India',
                description: 'Follow us for news, photos, videos and the latest trends from India and around the world. http://t.co/IZXefx3rSt',
                url: 'http://t.co/IZXefx3rSt',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'http://t.co/IZXefx3rSt',
                        expanded_url: 'http://www.dnaindia.com',
                        display_url: 'dnaindia.com',
                        indices: [0, 22]
                      }
                    ]
                  },
                  description: {
                    urls: [
                      {
                        url: 'http://t.co/IZXefx3rSt',
                        expanded_url: 'http://www.dnaindia.com',
                        display_url: 'dnaindia.com',
                        indices: [90, 112]
                      }
                    ]
                  }
                },
                protected: false,
                followers_count: 1746066,
                friends_count: 354,
                listed_count: 3445,
                created_at: 'Fri Nov 28 15:39:38 +0000 2008',
                favourites_count: 92,
                utc_offset: 19800,
                time_zone: 'New Delhi',
                geo_enabled: false,
                verified: true,
                statuses_count: 414256,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: 'FFFFFF',
                profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000175778006/yAHZPUM0.jpeg',
                profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000175778006/yAHZPUM0.jpeg',
                profile_background_tile: false,
                profile_image_url: 'http://pbs.twimg.com/profile_images/864432203370905601/yWa-6Q9O_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/864432203370905601/yWa-6Q9O_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/17710740/1507174704',
                profile_link_color: '1B95E0',
                profile_sidebar_border_color: '000000',
                profile_sidebar_fill_color: '542437',
                profile_text_color: 'C02942',
                profile_use_background_image: true,
                has_extended_profile: false,
                default_profile: false,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'regular'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 8,
              favorite_count: 45,
              favorited: false,
              retweeted: false,
              possibly_sensitive: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 8,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:27:43 +0000 2017',
            id: 917018670249009200,
            id_str: '917018670249009153',
            text: 'RT @BrokenCricket: " Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [
                {
                  screen_name: 'BrokenCricket',
                  name: 'Broken Cricket',
                  id: 907619970,
                  id_str: '907619970',
                  indices: [3, 17]
                }
              ],
              urls: []
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="https://mobile.twitter.com" rel="nofollow">Mobile Web (M2)</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 917018286910345200,
              id_str: '917018286910345218',
              name: 'BUY FOLLO₩ERS :yuk',
              screen_name: 'KilleanTessa',
              location: '',
              description: 'Check the first twěět for the Iiŉk \n\nref:riebfpnb',
              url: null,
              entities: { description: { urls: [] } },
              protected: false,
              followers_count: 0,
              friends_count: 0,
              listed_count: 0,
              created_at: 'Sun Oct 08 13:26:11 +0000 2017',
              favourites_count: 0,
              utc_offset: null,
              time_zone: null,
              geo_enabled: false,
              verified: false,
              statuses_count: 279,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'F5F8FA',
              profile_background_image_url: null,
              profile_background_image_url_https: null,
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/917018585867853825/VzoICPy7_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/917018585867853825/VzoICPy7_normal.jpg',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: false,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 08:34:36 +0000 2017',
              id: 916944908337868800,
              id_str: '916944908337868800',
              text: '" Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
              truncated: false,
              entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 907619970,
                id_str: '907619970',
                name: 'Broken Cricket',
                screen_name: 'BrokenCricket',
                location: '',
                description: 'I was married to Sachin then fell in Love with Kohli now secretly dating AB',
                url: 'https://t.co/FBWn6henPH',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/FBWn6henPH',
                        expanded_url: 'https://www.facebook.com/BrokenCricketofficial/',
                        display_url: 'facebook.com/BrokenCricketo…',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: { urls: [] }
                },
                protected: false,
                followers_count: 172513,
                friends_count: 87,
                listed_count: 246,
                created_at: 'Sat Oct 27 08:03:44 +0000 2012',
                favourites_count: 13615,
                utc_offset: 10800,
                time_zone: 'Athens',
                geo_enabled: false,
                verified: false,
                statuses_count: 31679,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: 'C0DEED',
                profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_tile: false,
                profile_image_url: 'http://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/907619970/1498923596',
                profile_link_color: '1DA1F2',
                profile_sidebar_border_color: 'C0DEED',
                profile_sidebar_fill_color: 'DDEEF6',
                profile_text_color: '333333',
                profile_use_background_image: true,
                has_extended_profile: true,
                default_profile: true,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 363,
              favorite_count: 830,
              favorited: false,
              retweeted: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 363,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:27:34 +0000 2017',
            id: 917018635352207400,
            id_str: '917018635352207360',
            text: 'RT @officialDhoniFC: These Smiles from our Inspiration, make our Super Sunday. #Dhoni #MSD #Ranchi #IndvAus #Mahi https://t.co/0mDXDrHobe',
            truncated: false,
            entities: {
              hashtags: [
                { text: 'Dhoni', indices: [79, 85] },
                { text: 'MSD', indices: [86, 90] },
                { text: 'Ranchi', indices: [91, 98] },
                { text: 'IndvAus', indices: [99, 107] },
                { text: 'Mahi', indices: [108, 113] }
              ],
              symbols: [],
              user_mentions: [
                {
                  screen_name: 'officialDhoniFC',
                  name: '#Dhoni #Dhoni FC',
                  id: 3019564778,
                  id_str: '3019564778',
                  indices: [3, 19]
                }
              ],
              urls: [],
              media: [
                {
                  id: 916913274330812400,
                  id_str: '916913274330812416',
                  indices: [114, 137],
                  media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  url: 'https://t.co/0mDXDrHobe',
                  display_url: 'pic.twitter.com/0mDXDrHobe',
                  expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  },
                  source_status_id: 916913305146474500,
                  source_status_id_str: '916913305146474496',
                  source_user_id: 1244185244,
                  source_user_id_str: '1244185244'
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916913274330812400,
                  id_str: '916913274330812416',
                  indices: [114, 137],
                  media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  url: 'https://t.co/0mDXDrHobe',
                  display_url: 'pic.twitter.com/0mDXDrHobe',
                  expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  },
                  source_status_id: 916913305146474500,
                  source_status_id_str: '916913305146474496',
                  source_user_id: 1244185244,
                  source_user_id_str: '1244185244'
                },
                {
                  id: 916913293846966300,
                  id_str: '916913293846966273',
                  indices: [114, 137],
                  media_url: 'http://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                  url: 'https://t.co/0mDXDrHobe',
                  display_url: 'pic.twitter.com/0mDXDrHobe',
                  expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                  type: 'photo',
                  sizes: {
                    small: { w: 559, h: 547, resize: 'fit' },
                    large: { w: 559, h: 547, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 559, h: 547, resize: 'fit' }
                  },
                  source_status_id: 916913305146474500,
                  source_status_id_str: '916913305146474496',
                  source_user_id: 1244185244,
                  source_user_id_str: '1244185244'
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 902940305745338400,
              id_str: '902940305745338369',
              name: 'karthikeyan Palanisa',
              screen_name: 'karthikeyanPa10',
              location: 'Tamil Nadu, India',
              description: 'Sports Cricketers and Commentators Cricketers and Commentators Sports News, TV and Scores Entertainment South Indian Breaking News CEOs Business & CEOs',
              url: null,
              entities: { description: { urls: [] } },
              protected: false,
              followers_count: 5,
              friends_count: 175,
              listed_count: 0,
              created_at: 'Wed Aug 30 17:05:19 +0000 2017',
              favourites_count: 9,
              utc_offset: null,
              time_zone: null,
              geo_enabled: false,
              verified: false,
              statuses_count: 344,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'F5F8FA',
              profile_background_image_url: null,
              profile_background_image_url_https: null,
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/903264169541025792/lF6bzcvg_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/903264169541025792/lF6bzcvg_normal.jpg',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 06:35:05 +0000 2017',
              id: 916914828081582100,
              id_str: '916914828081582080',
              text: 'These Smiles from our Inspiration, make our Super Sunday. #Dhoni #MSD #Ranchi #IndvAus #Mahi https://t.co/0mDXDrHobe',
              truncated: false,
              entities: {
                hashtags: [
                  { text: 'Dhoni', indices: [58, 64] },
                  { text: 'MSD', indices: [65, 69] },
                  { text: 'Ranchi', indices: [70, 77] },
                  { text: 'IndvAus', indices: [78, 86] },
                  { text: 'Mahi', indices: [87, 92] }
                ],
                symbols: [],
                user_mentions: [],
                urls: [],
                media: [
                  {
                    id: 916913274330812400,
                    id_str: '916913274330812416',
                    indices: [93, 116],
                    media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                    media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                    url: 'https://t.co/0mDXDrHobe',
                    display_url: 'pic.twitter.com/0mDXDrHobe',
                    expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                    type: 'photo',
                    sizes: {
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      medium: { w: 1080, h: 1080, resize: 'fit' },
                      large: { w: 1080, h: 1080, resize: 'fit' },
                      small: { w: 680, h: 680, resize: 'fit' }
                    },
                    source_status_id: 916913305146474500,
                    source_status_id_str: '916913305146474496',
                    source_user_id: 1244185244,
                    source_user_id_str: '1244185244'
                  }
                ]
              },
              extended_entities: {
                media: [
                  {
                    id: 916913274330812400,
                    id_str: '916913274330812416',
                    indices: [93, 116],
                    media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                    media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                    url: 'https://t.co/0mDXDrHobe',
                    display_url: 'pic.twitter.com/0mDXDrHobe',
                    expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                    type: 'photo',
                    sizes: {
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      medium: { w: 1080, h: 1080, resize: 'fit' },
                      large: { w: 1080, h: 1080, resize: 'fit' },
                      small: { w: 680, h: 680, resize: 'fit' }
                    },
                    source_status_id: 916913305146474500,
                    source_status_id_str: '916913305146474496',
                    source_user_id: 1244185244,
                    source_user_id_str: '1244185244'
                  },
                  {
                    id: 916913293846966300,
                    id_str: '916913293846966273',
                    indices: [93, 116],
                    media_url: 'http://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                    media_url_https: 'https://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                    url: 'https://t.co/0mDXDrHobe',
                    display_url: 'pic.twitter.com/0mDXDrHobe',
                    expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                    type: 'photo',
                    sizes: {
                      small: { w: 559, h: 547, resize: 'fit' },
                      large: { w: 559, h: 547, resize: 'fit' },
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      medium: { w: 559, h: 547, resize: 'fit' }
                    },
                    source_status_id: 916913305146474500,
                    source_status_id_str: '916913305146474496',
                    source_user_id: 1244185244,
                    source_user_id_str: '1244185244'
                  }
                ]
              },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="https://ifttt.com" rel="nofollow">IFTTT</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 3019564778,
                id_str: '3019564778',
                name: '#Dhoni #Dhoni FC',
                screen_name: 'officialDhoniFC',
                location: 'India √',
                description: '#MsDhoni #Dhoni\r\n#MsDhoni #Dhoni\r\n#MsDhoni #Dhoni\r\nMsDhoni Dhoni\r\n#MsDhoni #Dhoni\r\nMsDhoni Dhoni\r\n#MsDhoni #Dhoni\r\nMsDhoni Dhoni\r\nMsDhoni Dhoni\r\n#Dhoni  #Dhoni',
                url: 'https://t.co/CjQ5gS1lWY',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/CjQ5gS1lWY',
                        expanded_url: 'http://Espncricinfo.com',
                        display_url: 'Espncricinfo.com',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: { urls: [] }
                },
                protected: false,
                followers_count: 35745,
                friends_count: 25,
                listed_count: 76,
                created_at: 'Sat Feb 14 11:51:57 +0000 2015',
                favourites_count: 1091,
                utc_offset: 18000,
                time_zone: 'Karachi',
                geo_enabled: false,
                verified: false,
                statuses_count: 26152,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: '000000',
                profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_tile: false,
                profile_image_url: 'http://pbs.twimg.com/profile_images/911771392013688832/tZEKmYJa_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/911771392013688832/tZEKmYJa_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/3019564778/1506218219',
                profile_link_color: 'FA743E',
                profile_sidebar_border_color: '000000',
                profile_sidebar_fill_color: '000000',
                profile_text_color: '000000',
                profile_use_background_image: false,
                has_extended_profile: true,
                default_profile: false,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 2,
              favorite_count: 10,
              favorited: false,
              retweeted: false,
              possibly_sensitive: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 2,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:27:16 +0000 2017',
            id: 917018558093156400,
            id_str: '917018558093156352',
            text: 'RT @DHONIism: Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Ziva', indices: [30, 35] }],
              symbols: [],
              user_mentions: [
                { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
              ],
              urls: [],
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [62, 85],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'photo',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  source_status_id: 916997430331162600,
                  source_status_id_str: '916997430331162624',
                  source_user_id: 1727522635,
                  source_user_id_str: '1727522635'
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [62, 85],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'video',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  source_status_id: 916997430331162600,
                  source_status_id_str: '916997430331162624',
                  source_user_id: 1727522635,
                  source_user_id_str: '1727522635',
                  video_info: {
                    aspect_ratio: [20, 11],
                    duration_millis: 29267,
                    variants: [
                      {
                        bitrate: 320000,
                        content_type: 'video/mp4',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                      },
                      {
                        content_type: 'application/x-mpegURL',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                      }
                    ]
                  },
                  additional_media_info: {
                    monetizable: false,
                    source_user: {
                      id: 1727522635,
                      id_str: '1727522635',
                      name: 'DHONIsm ♥',
                      screen_name: 'DHONIism',
                      location: 'from Tamil Nadu to World :)',
                      description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                      url: 'https://t.co/VSrp5PXoY5',
                      entities: {
                        url: {
                          urls: [
                            {
                              url: 'https://t.co/VSrp5PXoY5',
                              expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                              display_url: 'facebook.com/BleedDhonIsm',
                              indices: [0, 23]
                            }
                          ]
                        },
                        description: { urls: [] }
                      },
                      protected: false,
                      followers_count: 133889,
                      friends_count: 23,
                      listed_count: 32,
                      created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                      favourites_count: 743,
                      utc_offset: 19800,
                      time_zone: 'New Delhi',
                      geo_enabled: true,
                      verified: false,
                      statuses_count: 7310,
                      lang: 'en',
                      contributors_enabled: false,
                      is_translator: false,
                      is_translation_enabled: false,
                      profile_background_color: 'C0DEED',
                      profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                      profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                      profile_background_tile: true,
                      profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                      profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                      profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                      profile_link_color: '0084B4',
                      profile_sidebar_border_color: 'FFFFFF',
                      profile_sidebar_fill_color: 'DDEEF6',
                      profile_text_color: '333333',
                      profile_use_background_image: true,
                      has_extended_profile: true,
                      default_profile: false,
                      default_profile_image: false,
                      following: false,
                      follow_request_sent: false,
                      notifications: false,
                      translator_type: 'none'
                    }
                  }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 585334504,
              id_str: '585334504',
              name: 'Mersal Bharath',
              screen_name: 'BharathTinz',
              location: 'Chennai, India',
              description: 'Thalapathy Veriyan! 😎😎😍 MSDian! ❤❤❤❤ Amateur photographer. 😁😝  Co-founder and Director of Photography : @sutta_vada',
              url: null,
              entities: { description: { urls: [] } },
              protected: false,
              followers_count: 323,
              friends_count: 300,
              listed_count: 6,
              created_at: 'Sun May 20 03:44:18 +0000 2012',
              favourites_count: 63493,
              utc_offset: null,
              time_zone: null,
              geo_enabled: false,
              verified: false,
              statuses_count: 26125,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/916934292697104384/eKW4W9C1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/916934292697104384/eKW4W9C1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/585334504/1507449149',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 12:03:19 +0000 2017',
              id: 916997430331162600,
              id_str: '916997430331162624',
              text: 'Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
              truncated: false,
              entities: {
                hashtags: [{ text: 'Ziva', indices: [16, 21] }],
                symbols: [],
                user_mentions: [],
                urls: [],
                media: [
                  {
                    id: 916997015497613300,
                    id_str: '916997015497613313',
                    indices: [48, 71],
                    media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    url: 'https://t.co/nzngJRmy81',
                    display_url: 'pic.twitter.com/nzngJRmy81',
                    expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                    type: 'photo',
                    sizes: {
                      medium: { w: 600, h: 330, resize: 'fit' },
                      large: { w: 640, h: 352, resize: 'fit' },
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      small: { w: 340, h: 187, resize: 'fit' }
                    }
                  }
                ]
              },
              extended_entities: {
                media: [
                  {
                    id: 916997015497613300,
                    id_str: '916997015497613313',
                    indices: [48, 71],
                    media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    url: 'https://t.co/nzngJRmy81',
                    display_url: 'pic.twitter.com/nzngJRmy81',
                    expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                    type: 'video',
                    sizes: {
                      medium: { w: 600, h: 330, resize: 'fit' },
                      large: { w: 640, h: 352, resize: 'fit' },
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      small: { w: 340, h: 187, resize: 'fit' }
                    },
                    video_info: {
                      aspect_ratio: [20, 11],
                      duration_millis: 29267,
                      variants: [
                        {
                          bitrate: 320000,
                          content_type: 'video/mp4',
                          url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                        },
                        {
                          content_type: 'application/x-mpegURL',
                          url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                        }
                      ]
                    },
                    additional_media_info: { monetizable: false }
                  }
                ]
              },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 1727522635,
                id_str: '1727522635',
                name: 'DHONIsm ♥',
                screen_name: 'DHONIism',
                location: 'from Tamil Nadu to World :)',
                description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                url: 'https://t.co/VSrp5PXoY5',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/VSrp5PXoY5',
                        expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                        display_url: 'facebook.com/BleedDhonIsm',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: { urls: [] }
                },
                protected: false,
                followers_count: 133889,
                friends_count: 23,
                listed_count: 32,
                created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                favourites_count: 743,
                utc_offset: 19800,
                time_zone: 'New Delhi',
                geo_enabled: true,
                verified: false,
                statuses_count: 7310,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: 'C0DEED',
                profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                profile_background_tile: true,
                profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                profile_link_color: '0084B4',
                profile_sidebar_border_color: 'FFFFFF',
                profile_sidebar_fill_color: 'DDEEF6',
                profile_text_color: '333333',
                profile_use_background_image: true,
                has_extended_profile: true,
                default_profile: false,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 112,
              favorite_count: 309,
              favorited: false,
              retweeted: false,
              possibly_sensitive: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 112,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:26:59 +0000 2017',
            id: 917018488534732800,
            id_str: '917018488534732805',
            text: 'RT @BrokenCricket: " Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [
                {
                  screen_name: 'BrokenCricket',
                  name: 'Broken Cricket',
                  id: 907619970,
                  id_str: '907619970',
                  indices: [3, 17]
                }
              ],
              urls: []
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 144089436,
              id_str: '144089436',
              name: 'Jegan',
              screen_name: 'IamJegan',
              location: 'Tuticorin / Trichy / Chennai',
              description: 'A Big Fanatic of @SGanguly99. Want him to Coach Team India & Lift the World Cup! Thala Ajith Addict!',
              url: 'https://t.co/lyD9bn1TXG',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/lyD9bn1TXG',
                      expanded_url: 'http://thecineket.com',
                      display_url: 'thecineket.com',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 3270,
              friends_count: 281,
              listed_count: 15,
              created_at: 'Sat May 15 07:56:02 +0000 2010',
              favourites_count: 778,
              utc_offset: 19800,
              time_zone: 'Chennai',
              geo_enabled: true,
              verified: false,
              statuses_count: 31673,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '352726',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme5/bg.gif',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme5/bg.gif',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/906201523725623296/pHeFZ-tQ_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/906201523725623296/pHeFZ-tQ_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/144089436/1436104530',
              profile_link_color: 'D02B55',
              profile_sidebar_border_color: '829D5E',
              profile_sidebar_fill_color: '99CC33',
              profile_text_color: '3E4415',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 08:34:36 +0000 2017',
              id: 916944908337868800,
              id_str: '916944908337868800',
              text: '" Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
              truncated: false,
              entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 907619970,
                id_str: '907619970',
                name: 'Broken Cricket',
                screen_name: 'BrokenCricket',
                location: '',
                description: 'I was married to Sachin then fell in Love with Kohli now secretly dating AB',
                url: 'https://t.co/FBWn6henPH',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/FBWn6henPH',
                        expanded_url: 'https://www.facebook.com/BrokenCricketofficial/',
                        display_url: 'facebook.com/BrokenCricketo…',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: { urls: [] }
                },
                protected: false,
                followers_count: 172513,
                friends_count: 87,
                listed_count: 246,
                created_at: 'Sat Oct 27 08:03:44 +0000 2012',
                favourites_count: 13615,
                utc_offset: 10800,
                time_zone: 'Athens',
                geo_enabled: false,
                verified: false,
                statuses_count: 31679,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: 'C0DEED',
                profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_tile: false,
                profile_image_url: 'http://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/907619970/1498923596',
                profile_link_color: '1DA1F2',
                profile_sidebar_border_color: 'C0DEED',
                profile_sidebar_fill_color: 'DDEEF6',
                profile_text_color: '333333',
                profile_use_background_image: true,
                has_extended_profile: true,
                default_profile: true,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 363,
              favorite_count: 830,
              favorited: false,
              retweeted: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 363,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:26:34 +0000 2017',
            id: 917018382884495400,
            id_str: '917018382884495360',
            text: 'RT @DHONIism: Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Ziva', indices: [30, 35] }],
              symbols: [],
              user_mentions: [
                { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
              ],
              urls: [],
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [62, 85],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'photo',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  source_status_id: 916997430331162600,
                  source_status_id_str: '916997430331162624',
                  source_user_id: 1727522635,
                  source_user_id_str: '1727522635'
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [62, 85],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'video',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  source_status_id: 916997430331162600,
                  source_status_id_str: '916997430331162624',
                  source_user_id: 1727522635,
                  source_user_id_str: '1727522635',
                  video_info: {
                    aspect_ratio: [20, 11],
                    duration_millis: 29267,
                    variants: [
                      {
                        bitrate: 320000,
                        content_type: 'video/mp4',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                      },
                      {
                        content_type: 'application/x-mpegURL',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                      }
                    ]
                  },
                  additional_media_info: {
                    monetizable: false,
                    source_user: {
                      id: 1727522635,
                      id_str: '1727522635',
                      name: 'DHONIsm ♥',
                      screen_name: 'DHONIism',
                      location: 'from Tamil Nadu to World :)',
                      description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                      url: 'https://t.co/VSrp5PXoY5',
                      entities: {
                        url: {
                          urls: [
                            {
                              url: 'https://t.co/VSrp5PXoY5',
                              expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                              display_url: 'facebook.com/BleedDhonIsm',
                              indices: [0, 23]
                            }
                          ]
                        },
                        description: { urls: [] }
                      },
                      protected: false,
                      followers_count: 133889,
                      friends_count: 23,
                      listed_count: 32,
                      created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                      favourites_count: 743,
                      utc_offset: 19800,
                      time_zone: 'New Delhi',
                      geo_enabled: true,
                      verified: false,
                      statuses_count: 7310,
                      lang: 'en',
                      contributors_enabled: false,
                      is_translator: false,
                      is_translation_enabled: false,
                      profile_background_color: 'C0DEED',
                      profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                      profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                      profile_background_tile: true,
                      profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                      profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                      profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                      profile_link_color: '0084B4',
                      profile_sidebar_border_color: 'FFFFFF',
                      profile_sidebar_fill_color: 'DDEEF6',
                      profile_text_color: '333333',
                      profile_use_background_image: true,
                      has_extended_profile: true,
                      default_profile: false,
                      default_profile_image: false,
                      following: false,
                      follow_request_sent: false,
                      notifications: false,
                      translator_type: 'none'
                    }
                  }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 3174923622,
              id_str: '3174923622',
              name: 'Aяνιηтн',
              screen_name: 'ArvinthVj',
              location: 'Erode, India',
              description: 'சராசரி இந்திய ப்ரஜை || Mech || Cine | Tech freak\n|| A man in search is the Man Indeed || Proud Gixxeriann😎',
              url: null,
              entities: { description: { urls: [] } },
              protected: false,
              followers_count: 5112,
              friends_count: 465,
              listed_count: 22,
              created_at: 'Sun Apr 26 05:37:28 +0000 2015',
              favourites_count: 16446,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 28355,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '642D8B',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme10/bg.gif',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme10/bg.gif',
              profile_background_tile: true,
              profile_image_url: 'http://pbs.twimg.com/profile_images/911612405133615104/Lmh9E_-S_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/911612405133615104/Lmh9E_-S_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/3174923622/1505735402',
              profile_link_color: 'FF0000',
              profile_sidebar_border_color: '65B0DA',
              profile_sidebar_fill_color: '7AC3EE',
              profile_text_color: '3D1957',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 12:03:19 +0000 2017',
              id: 916997430331162600,
              id_str: '916997430331162624',
              text: 'Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
              truncated: false,
              entities: {
                hashtags: [{ text: 'Ziva', indices: [16, 21] }],
                symbols: [],
                user_mentions: [],
                urls: [],
                media: [
                  {
                    id: 916997015497613300,
                    id_str: '916997015497613313',
                    indices: [48, 71],
                    media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    url: 'https://t.co/nzngJRmy81',
                    display_url: 'pic.twitter.com/nzngJRmy81',
                    expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                    type: 'photo',
                    sizes: {
                      medium: { w: 600, h: 330, resize: 'fit' },
                      large: { w: 640, h: 352, resize: 'fit' },
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      small: { w: 340, h: 187, resize: 'fit' }
                    }
                  }
                ]
              },
              extended_entities: {
                media: [
                  {
                    id: 916997015497613300,
                    id_str: '916997015497613313',
                    indices: [48, 71],
                    media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    url: 'https://t.co/nzngJRmy81',
                    display_url: 'pic.twitter.com/nzngJRmy81',
                    expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                    type: 'video',
                    sizes: {
                      medium: { w: 600, h: 330, resize: 'fit' },
                      large: { w: 640, h: 352, resize: 'fit' },
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      small: { w: 340, h: 187, resize: 'fit' }
                    },
                    video_info: {
                      aspect_ratio: [20, 11],
                      duration_millis: 29267,
                      variants: [
                        {
                          bitrate: 320000,
                          content_type: 'video/mp4',
                          url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                        },
                        {
                          content_type: 'application/x-mpegURL',
                          url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                        }
                      ]
                    },
                    additional_media_info: { monetizable: false }
                  }
                ]
              },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 1727522635,
                id_str: '1727522635',
                name: 'DHONIsm ♥',
                screen_name: 'DHONIism',
                location: 'from Tamil Nadu to World :)',
                description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                url: 'https://t.co/VSrp5PXoY5',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/VSrp5PXoY5',
                        expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                        display_url: 'facebook.com/BleedDhonIsm',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: { urls: [] }
                },
                protected: false,
                followers_count: 133889,
                friends_count: 23,
                listed_count: 32,
                created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                favourites_count: 743,
                utc_offset: 19800,
                time_zone: 'New Delhi',
                geo_enabled: true,
                verified: false,
                statuses_count: 7310,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: 'C0DEED',
                profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                profile_background_tile: true,
                profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                profile_link_color: '0084B4',
                profile_sidebar_border_color: 'FFFFFF',
                profile_sidebar_fill_color: 'DDEEF6',
                profile_text_color: '333333',
                profile_use_background_image: true,
                has_extended_profile: true,
                default_profile: false,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 112,
              favorite_count: 309,
              favorited: false,
              retweeted: false,
              possibly_sensitive: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 112,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:26:30 +0000 2017',
            id: 917018367281655800,
            id_str: '917018367281655808',
            text: 'RT @FirstCric: "Had Sourav Ganguly not promoted Dhoni to No 3, he wouldn’t have become such a great player," says Virender Sehwag\nhttps://t…',
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [
                {
                  screen_name: 'FirstCric',
                  name: 'FirstCricket',
                  id: 888369388906135600,
                  id_str: '888369388906135552',
                  indices: [3, 13]
                }
              ],
              urls: []
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 1348006476,
              id_str: '1348006476',
              name: 'A',
              screen_name: 'Arijitme',
              location: 'India',
              description: '#Believeinyourself#NeverGiveup inlife#Entrepreneur#Dreamer#Achiever#Chelsea#Moviebuff#PremierLeague.. Events - DM for Enquiries',
              url: 'https://t.co/SE8gkxhOkj',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/SE8gkxhOkj',
                      expanded_url: 'https://movewanderlust.com',
                      display_url: 'movewanderlust.com',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 132,
              friends_count: 197,
              listed_count: 10,
              created_at: 'Sat Apr 13 00:26:28 +0000 2013',
              favourites_count: 2730,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 6076,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '022330',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme15/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme15/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/908981012352212992/Vf0kJ9Ha_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/908981012352212992/Vf0kJ9Ha_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/1348006476/1498468283',
              profile_link_color: '0084B4',
              profile_sidebar_border_color: 'A8C7F7',
              profile_sidebar_fill_color: 'C0DFEC',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 13:21:10 +0000 2017',
              id: 917017025662263300,
              id_str: '917017025662263296',
              text: '"Had Sourav Ganguly not promoted Dhoni to No 3, he wouldn’t have become such a great player," says Virender Sehwag\nhttps://t.co/FIANVgKeRI',
              truncated: false,
              entities: {
                hashtags: [],
                symbols: [],
                user_mentions: [],
                urls: [
                  {
                    url: 'https://t.co/FIANVgKeRI',
                    expanded_url: 'http://www.firstpost.com/firstcricket/sports-news/sourav-ganguly-sacrificed-his-batting-spot-to-make-ms-dhoni-a-great-player-says-virender-sehwag-4121625.html',
                    display_url: 'firstpost.com/firstcricket/s…',
                    indices: [115, 138]
                  }
                ]
              },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="https://about.twitter.com/products/tweetdeck" rel="nofollow">TweetDeck</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 888369388906135600,
                id_str: '888369388906135552',
                name: 'FirstCricket',
                screen_name: 'FirstCric',
                location: '',
                description: 'Bringing you live updates, breaking news, opinions and photos from the world of cricket',
                url: 'https://t.co/X7UPznamYz',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/X7UPznamYz',
                        expanded_url: 'http://www.firstpost.com/firstcricket/',
                        display_url: 'firstpost.com/firstcricket/',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: { urls: [] }
                },
                protected: false,
                followers_count: 603,
                friends_count: 47,
                listed_count: 9,
                created_at: 'Fri Jul 21 12:05:42 +0000 2017',
                favourites_count: 0,
                utc_offset: -25200,
                time_zone: 'Pacific Time (US & Canada)',
                geo_enabled: false,
                verified: false,
                statuses_count: 3114,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: '000000',
                profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
                profile_background_tile: false,
                profile_image_url: 'http://pbs.twimg.com/profile_images/888370591685726208/Jr6laI3X_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/888370591685726208/Jr6laI3X_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/888369388906135552/1502726156',
                profile_link_color: 'A6CE39',
                profile_sidebar_border_color: '000000',
                profile_sidebar_fill_color: '000000',
                profile_text_color: '000000',
                profile_use_background_image: false,
                has_extended_profile: false,
                default_profile: false,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 3,
              favorite_count: 2,
              favorited: false,
              retweeted: false,
              possibly_sensitive: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 3,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          {
            created_at: 'Sun Oct 08 13:25:55 +0000 2017',
            id: 917018217792417800,
            id_str: '917018217792417792',
            text: 'RT @DHONIism: Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Ziva', indices: [30, 35] }],
              symbols: [],
              user_mentions: [
                { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
              ],
              urls: [],
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [62, 85],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'photo',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  source_status_id: 916997430331162600,
                  source_status_id_str: '916997430331162624',
                  source_user_id: 1727522635,
                  source_user_id_str: '1727522635'
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [62, 85],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'video',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  source_status_id: 916997430331162600,
                  source_status_id_str: '916997430331162624',
                  source_user_id: 1727522635,
                  source_user_id_str: '1727522635',
                  video_info: {
                    aspect_ratio: [20, 11],
                    duration_millis: 29267,
                    variants: [
                      {
                        bitrate: 320000,
                        content_type: 'video/mp4',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                      },
                      {
                        content_type: 'application/x-mpegURL',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                      }
                    ]
                  },
                  additional_media_info: {
                    monetizable: false,
                    source_user: {
                      id: 1727522635,
                      id_str: '1727522635',
                      name: 'DHONIsm ♥',
                      screen_name: 'DHONIism',
                      location: 'from Tamil Nadu to World :)',
                      description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                      url: 'https://t.co/VSrp5PXoY5',
                      entities: {
                        url: {
                          urls: [
                            {
                              url: 'https://t.co/VSrp5PXoY5',
                              expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                              display_url: 'facebook.com/BleedDhonIsm',
                              indices: [0, 23]
                            }
                          ]
                        },
                        description: { urls: [] }
                      },
                      protected: false,
                      followers_count: 133889,
                      friends_count: 23,
                      listed_count: 32,
                      created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                      favourites_count: 743,
                      utc_offset: 19800,
                      time_zone: 'New Delhi',
                      geo_enabled: true,
                      verified: false,
                      statuses_count: 7310,
                      lang: 'en',
                      contributors_enabled: false,
                      is_translator: false,
                      is_translation_enabled: false,
                      profile_background_color: 'C0DEED',
                      profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                      profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                      profile_background_tile: true,
                      profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                      profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                      profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                      profile_link_color: '0084B4',
                      profile_sidebar_border_color: 'FFFFFF',
                      profile_sidebar_fill_color: 'DDEEF6',
                      profile_text_color: '333333',
                      profile_use_background_image: true,
                      has_extended_profile: true,
                      default_profile: false,
                      default_profile_image: false,
                      following: false,
                      follow_request_sent: false,
                      notifications: false,
                      translator_type: 'none'
                    }
                  }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 871408030474162200,
              id_str: '871408030474162176',
              name: 'MS Dhoni',
              screen_name: 'MSDhoni85350822',
              location: 'Bengaluru South, India',
              description: "I love my country india💙\n                                            I'm a fan of MS Dhoni and Rajinikanth..💖\n                  👉Pawan kalyan is my Heart💖..",
              url: null,
              entities: { description: { urls: [] } },
              protected: false,
              followers_count: 76,
              friends_count: 381,
              listed_count: 1,
              created_at: 'Sun Jun 04 16:47:19 +0000 2017',
              favourites_count: 3276,
              utc_offset: null,
              time_zone: null,
              geo_enabled: false,
              verified: false,
              statuses_count: 2141,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'F5F8FA',
              profile_background_image_url: null,
              profile_background_image_url_https: null,
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/916849356094844928/i7JSZkxX_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/916849356094844928/i7JSZkxX_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/871408030474162176/1502765044',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            retweeted_status: {
              created_at: 'Sun Oct 08 12:03:19 +0000 2017',
              id: 916997430331162600,
              id_str: '916997430331162624',
              text: 'Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
              truncated: false,
              entities: {
                hashtags: [{ text: 'Ziva', indices: [16, 21] }],
                symbols: [],
                user_mentions: [],
                urls: [],
                media: [
                  {
                    id: 916997015497613300,
                    id_str: '916997015497613313',
                    indices: [48, 71],
                    media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    url: 'https://t.co/nzngJRmy81',
                    display_url: 'pic.twitter.com/nzngJRmy81',
                    expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                    type: 'photo',
                    sizes: {
                      medium: { w: 600, h: 330, resize: 'fit' },
                      large: { w: 640, h: 352, resize: 'fit' },
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      small: { w: 340, h: 187, resize: 'fit' }
                    }
                  }
                ]
              },
              extended_entities: {
                media: [
                  {
                    id: 916997015497613300,
                    id_str: '916997015497613313',
                    indices: [48, 71],
                    media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                    url: 'https://t.co/nzngJRmy81',
                    display_url: 'pic.twitter.com/nzngJRmy81',
                    expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                    type: 'video',
                    sizes: {
                      medium: { w: 600, h: 330, resize: 'fit' },
                      large: { w: 640, h: 352, resize: 'fit' },
                      thumb: { w: 150, h: 150, resize: 'crop' },
                      small: { w: 340, h: 187, resize: 'fit' }
                    },
                    video_info: {
                      aspect_ratio: [20, 11],
                      duration_millis: 29267,
                      variants: [
                        {
                          bitrate: 320000,
                          content_type: 'video/mp4',
                          url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                        },
                        {
                          content_type: 'application/x-mpegURL',
                          url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                        }
                      ]
                    },
                    additional_media_info: { monetizable: false }
                  }
                ]
              },
              metadata: { iso_language_code: 'en', result_type: 'recent' },
              source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
              in_reply_to_status_id: null,
              in_reply_to_status_id_str: null,
              in_reply_to_user_id: null,
              in_reply_to_user_id_str: null,
              in_reply_to_screen_name: null,
              user: {
                id: 1727522635,
                id_str: '1727522635',
                name: 'DHONIsm ♥',
                screen_name: 'DHONIism',
                location: 'from Tamil Nadu to World :)',
                description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                url: 'https://t.co/VSrp5PXoY5',
                entities: {
                  url: {
                    urls: [
                      {
                        url: 'https://t.co/VSrp5PXoY5',
                        expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                        display_url: 'facebook.com/BleedDhonIsm',
                        indices: [0, 23]
                      }
                    ]
                  },
                  description: { urls: [] }
                },
                protected: false,
                followers_count: 133889,
                friends_count: 23,
                listed_count: 32,
                created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                favourites_count: 743,
                utc_offset: 19800,
                time_zone: 'New Delhi',
                geo_enabled: true,
                verified: false,
                statuses_count: 7310,
                lang: 'en',
                contributors_enabled: false,
                is_translator: false,
                is_translation_enabled: false,
                profile_background_color: 'C0DEED',
                profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                profile_background_tile: true,
                profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                profile_link_color: '0084B4',
                profile_sidebar_border_color: 'FFFFFF',
                profile_sidebar_fill_color: 'DDEEF6',
                profile_text_color: '333333',
                profile_use_background_image: true,
                has_extended_profile: true,
                default_profile: false,
                default_profile_image: false,
                following: false,
                follow_request_sent: false,
                notifications: false,
                translator_type: 'none'
              },
              geo: null,
              coordinates: null,
              place: null,
              contributors: null,
              is_quote_status: false,
              retweet_count: 112,
              favorite_count: 309,
              favorited: false,
              retweeted: false,
              possibly_sensitive: false,
              lang: 'en'
            },
            is_quote_status: false,
            retweet_count: 112,
            favorite_count: 0,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          }
        ]
      },
      searchStatus: { loaded: true, error: false, errorMsg: '' },
      itemData: { text: '', username: '' }
    },
    {
      type: 'ADD_FIND_ONE',
      payload: {
        text: "CUTE | Virat Kohli having fun with MS Dhoni's daughter Ziva | Must Watch | Virat Fans.: https://t.co/E11Ex214lc via @YouTube",
        username: 'Rockstar'
      }
    }
  );
  expect(state).toEqual({
    searchTerm: 'dhoni',
    searchData: {
      data: [
        {
          created_at: 'Sun Oct 08 13:29:09 +0000 2017',
          id: 917019033584787500,
          id_str: '917019033584787456',
          text: "CUTE | Virat Kohli having fun with MS Dhoni's daughter Ziva | Must Watch | Virat Fans.: https://t.co/E11Ex214lc via @YouTube",
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              { screen_name: 'YouTube', name: 'YouTube', id: 10228272, id_str: '10228272', indices: [116, 124] }
            ],
            urls: [
              {
                url: 'https://t.co/E11Ex214lc',
                expanded_url: 'http://youtu.be/mtflMTy9r7E?a',
                display_url: 'youtu.be/mtflMTy9r7E?a',
                indices: [88, 111]
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://www.google.com/" rel="nofollow">Google</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 711870517,
            id_str: '711870517',
            name: 'Rockstar',
            screen_name: 'shivamrocks02',
            location: 'India',
            description: 'Just living my dreams.',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 4750,
            friends_count: 490,
            listed_count: 30,
            created_at: 'Mon Jul 23 05:41:19 +0000 2012',
            favourites_count: 24671,
            utc_offset: 19800,
            time_zone: 'New Delhi',
            geo_enabled: false,
            verified: false,
            statuses_count: 49357,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '000000',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme9/bg.gif',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme9/bg.gif',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/790939117039214592/IcLtgmBx_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/790939117039214592/IcLtgmBx_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/711870517/1436525719',
            profile_link_color: '1B95E0',
            profile_sidebar_border_color: '000000',
            profile_sidebar_fill_color: '000000',
            profile_text_color: '000000',
            profile_use_background_image: false,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 0,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:28:47 +0000 2017',
          id: 917018941968539600,
          id_str: '917018941968539648',
          text: 'How Sourav Ganguly played his part in making of the legend of MS Dhoni https://t.co/qVbpmHaM4A',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [],
            urls: [
              {
                url: 'https://t.co/qVbpmHaM4A',
                expanded_url: 'http://ift.tt/2kvt1XM',
                display_url: 'ift.tt/2kvt1XM',
                indices: [71, 94]
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="https://ifttt.com" rel="nofollow">IFTTT</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 178544713,
            id_str: '178544713',
            name: 'NewsStory',
            screen_name: 'NewsStoryIndia',
            location: 'India',
            description: 'Follow us now to get news from more than 100 news channels.No copyright Direct references to news content. Follow Now.\nProudly Made in India.जय हिन्द !! जय भारत',
            url: 'https://t.co/Wtiy0ExqsI',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/Wtiy0ExqsI',
                    expanded_url: 'http://newsstory.webnode.com',
                    display_url: 'newsstory.webnode.com',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 4601,
            friends_count: 28,
            listed_count: 27,
            created_at: 'Sun Aug 15 01:58:36 +0000 2010',
            favourites_count: 789,
            utc_offset: -25200,
            time_zone: 'Pacific Time (US & Canada)',
            geo_enabled: false,
            verified: false,
            statuses_count: 114332,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '000000',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme9/bg.gif',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme9/bg.gif',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/829323773769818113/0Z6sbzum_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/829323773769818113/0Z6sbzum_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/178544713/1475310281',
            profile_link_color: '3B94D9',
            profile_sidebar_border_color: '000000',
            profile_sidebar_fill_color: '000000',
            profile_text_color: '000000',
            profile_use_background_image: false,
            has_extended_profile: false,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 0,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:28:25 +0000 2017',
          id: 917018846690648000,
          id_str: '917018846690648064',
          text: 'RT @DHONIism: VVS Laxman - "Not only in Ranchi or in India, Dhoni will get the loudest cheer in overseas also &amp; he is an absolute Legend of…',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
            ],
            urls: []
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 833203035690192900,
            id_str: '833203035690192896',
            name: 'THE SALMAN KHAN 🔛🔝',
            screen_name: 'SalmanKaStarDom',
            location: 'Under Construction',
            description: "👉 #TIGER  🙏\nSalman Khan's FAN  @BeingSalmanKhan  #Tiger_Zinda_Hai on 22nd Dec 2017. Following Only Salman Khan's Fans",
            url: 'https://t.co/5JUl38Jryy',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/5JUl38Jryy',
                    expanded_url: 'http://SaraJagGhoomeyaLekinInkeJaisaNaKoi.com',
                    display_url: 'SaraJagGhoomeyaLekinInkeJaisaNaKoi.com',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 498,
            friends_count: 203,
            listed_count: 0,
            created_at: 'Sun Feb 19 06:34:18 +0000 2017',
            favourites_count: 8144,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 5880,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/912237357692215296/TTCvH5V4_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/912237357692215296/TTCvH5V4_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/833203035690192896/1506143031',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sat Oct 07 16:53:40 +0000 2017',
            id: 916708115302686700,
            id_str: '916708115302686720',
            text: 'VVS Laxman - "Not only in Ranchi or in India, Dhoni will get the loudest cheer in overseas also &amp; he is an absolute Legend of the game"',
            truncated: false,
            entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 1727522635,
              id_str: '1727522635',
              name: 'DHONIsm ♥',
              screen_name: 'DHONIism',
              location: 'from Tamil Nadu to World :)',
              description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
              url: 'https://t.co/VSrp5PXoY5',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/VSrp5PXoY5',
                      expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                      display_url: 'facebook.com/BleedDhonIsm',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 133889,
              friends_count: 23,
              listed_count: 32,
              created_at: 'Wed Sep 04 03:52:58 +0000 2013',
              favourites_count: 743,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 7310,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_tile: true,
              profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
              profile_link_color: '0084B4',
              profile_sidebar_border_color: 'FFFFFF',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 217,
            favorite_count: 562,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 217,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:28:23 +0000 2017',
          id: 917018841133195300,
          id_str: '917018841133195265',
          text: 'RT @msdfansofficial: His Smile is reason for billions Smile😇\n#Dhoni #INDvAUS https://t.co/vBVso0kX3V',
          truncated: false,
          entities: {
            hashtags: [{ text: 'Dhoni', indices: [61, 67] }, { text: 'INDvAUS', indices: [68, 76] }],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'msdfansofficial',
                name: 'MS Dhoni Fans #Dhoni',
                id: 2962738476,
                id_str: '2962738476',
                indices: [3, 19]
              }
            ],
            urls: [],
            media: [
              {
                id: 916886912534667300,
                id_str: '916886912534667265',
                indices: [77, 100],
                media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                url: 'https://t.co/vBVso0kX3V',
                display_url: 'pic.twitter.com/vBVso0kX3V',
                expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                type: 'photo',
                sizes: {
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 1080, h: 1080, resize: 'fit' },
                  large: { w: 1080, h: 1080, resize: 'fit' },
                  small: { w: 680, h: 680, resize: 'fit' }
                },
                source_status_id: 916886937209675800,
                source_status_id_str: '916886937209675776',
                source_user_id: 2962738476,
                source_user_id_str: '2962738476'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916886912534667300,
                id_str: '916886912534667265',
                indices: [77, 100],
                media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                url: 'https://t.co/vBVso0kX3V',
                display_url: 'pic.twitter.com/vBVso0kX3V',
                expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                type: 'photo',
                sizes: {
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 1080, h: 1080, resize: 'fit' },
                  large: { w: 1080, h: 1080, resize: 'fit' },
                  small: { w: 680, h: 680, resize: 'fit' }
                },
                source_status_id: 916886937209675800,
                source_status_id_str: '916886937209675776',
                source_user_id: 2962738476,
                source_user_id_str: '2962738476'
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Lite</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 821266766341017600,
            id_str: '821266766341017600',
            name: 'Varunmsdian77',
            screen_name: 'Varunmsdian77',
            location: 'Tamilnadu,INDIA',
            description: 'Proud to be an msdian. A big fan of sivakarthikeyanism.',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 18,
            friends_count: 94,
            listed_count: 0,
            created_at: 'Tue Jan 17 08:03:50 +0000 2017',
            favourites_count: 389,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 1024,
            lang: 'en-gb',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: false,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 04:44:15 +0000 2017',
            id: 916886937209675800,
            id_str: '916886937209675776',
            text: 'His Smile is reason for billions Smile😇\n#Dhoni #INDvAUS https://t.co/vBVso0kX3V',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Dhoni', indices: [40, 46] }, { text: 'INDvAUS', indices: [47, 55] }],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916886912534667300,
                  id_str: '916886912534667265',
                  indices: [56, 79],
                  media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  url: 'https://t.co/vBVso0kX3V',
                  display_url: 'pic.twitter.com/vBVso0kX3V',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916886912534667300,
                  id_str: '916886912534667265',
                  indices: [56, 79],
                  media_url: 'http://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlvygDVYAEWgo2.jpg',
                  url: 'https://t.co/vBVso0kX3V',
                  display_url: 'pic.twitter.com/vBVso0kX3V',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916886937209675776/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 2962738476,
              id_str: '2962738476',
              name: 'MS Dhoni Fans #Dhoni',
              screen_name: 'msdfansofficial',
              location: 'Ranchi, India',
              description: 'Official Fan Club of Mahendra Singh Dhoni. insights & updates on MS Dhoni. #Dhoni @msdhoni https://t.co/DxND6ychgJ',
              url: 'https://t.co/vIL4WfRXaa',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/vIL4WfRXaa',
                      expanded_url: 'https://www.facebook.com/MSDhoniFansOfficial',
                      display_url: 'facebook.com/MSDhoniFansOff…',
                      indices: [0, 23]
                    }
                  ]
                },
                description: {
                  urls: [
                    {
                      url: 'https://t.co/DxND6ychgJ',
                      expanded_url: 'https://www.instagram.com/msdhonifansofficial/',
                      display_url: 'instagram.com/msdhonifansoff…',
                      indices: [91, 114]
                    }
                  ]
                }
              },
              protected: false,
              followers_count: 37410,
              friends_count: 28,
              listed_count: 24,
              created_at: 'Wed Jan 07 09:42:39 +0000 2015',
              favourites_count: 54,
              utc_offset: 19800,
              time_zone: 'Chennai',
              geo_enabled: true,
              verified: false,
              statuses_count: 5483,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme16/bg.gif',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme16/bg.gif',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/2962738476/1493447487',
              profile_link_color: '73CDF7',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 51,
            favorite_count: 357,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 51,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:28:15 +0000 2017',
          id: 917018808253952000,
          id_str: '917018808253952002',
          text: 'Virat Kohli’s adorable moments with MS Dhoni’s daughter Ziva.. https://t.co/1cQiRsZOff',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [],
            urls: [
              {
                url: 'https://t.co/1cQiRsZOff',
                expanded_url: 'http://indianexpress.com/photos/sports-gallery/virat-kohlis-adorable-moments-with-ms-dhonis-daughter-ziva-pics-4880713/',
                display_url: 'indianexpress.com/photos/sports-…',
                indices: [63, 86]
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://NewsBoss.in" rel="nofollow">NewsBoss.in</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 753259712028696600,
            id_str: '753259712028696576',
            name: 'NewsBoss.in',
            screen_name: 'NewsBossIndia',
            location: '',
            description: 'News, you can choose!',
            url: 'https://t.co/y9fpUd38h3',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/y9fpUd38h3',
                    expanded_url: 'http://NewsBoss.in',
                    display_url: 'NewsBoss.in',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 945,
            friends_count: 1,
            listed_count: 219,
            created_at: 'Wed Jul 13 16:08:05 +0000 2016',
            favourites_count: 1,
            utc_offset: 19800,
            time_zone: 'New Delhi',
            geo_enabled: false,
            verified: false,
            statuses_count: 1175250,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '000000',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/753260679692333057/AS4Xiw4q_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/753260679692333057/AS4Xiw4q_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/753259712028696576/1468426410',
            profile_link_color: 'E81C4F',
            profile_sidebar_border_color: '000000',
            profile_sidebar_fill_color: '000000',
            profile_text_color: '000000',
            profile_use_background_image: false,
            has_extended_profile: false,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 0,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: true,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:54 +0000 2017',
          id: 917018717048913900,
          id_str: '917018717048913920',
          text: 'RT @msdfansofficial: That smile ♥\n#Dhoni #Ranchi #INDvsAUS https://t.co/mGpu18BGw6',
          truncated: false,
          entities: {
            hashtags: [
              { text: 'Dhoni', indices: [34, 40] },
              { text: 'Ranchi', indices: [41, 48] },
              { text: 'INDvsAUS', indices: [49, 58] }
            ],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'msdfansofficial',
                name: 'MS Dhoni Fans #Dhoni',
                id: 2962738476,
                id_str: '2962738476',
                indices: [3, 19]
              }
            ],
            urls: [],
            media: [
              {
                id: 916843458215559200,
                id_str: '916843458215559168',
                indices: [59, 82],
                media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                url: 'https://t.co/mGpu18BGw6',
                display_url: 'pic.twitter.com/mGpu18BGw6',
                expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                type: 'photo',
                sizes: {
                  small: { w: 680, h: 383, resize: 'fit' },
                  medium: { w: 1200, h: 675, resize: 'fit' },
                  large: { w: 1280, h: 720, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' }
                },
                source_status_id: 916843468424601600,
                source_status_id_str: '916843468424601601',
                source_user_id: 2962738476,
                source_user_id_str: '2962738476'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916843458215559200,
                id_str: '916843458215559168',
                indices: [59, 82],
                media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                url: 'https://t.co/mGpu18BGw6',
                display_url: 'pic.twitter.com/mGpu18BGw6',
                expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                type: 'photo',
                sizes: {
                  small: { w: 680, h: 383, resize: 'fit' },
                  medium: { w: 1200, h: 675, resize: 'fit' },
                  large: { w: 1280, h: 720, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' }
                },
                source_status_id: 916843468424601600,
                source_status_id_str: '916843468424601601',
                source_user_id: 2962738476,
                source_user_id_str: '2962738476'
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Lite</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 821266766341017600,
            id_str: '821266766341017600',
            name: 'Varunmsdian77',
            screen_name: 'Varunmsdian77',
            location: 'Tamilnadu,INDIA',
            description: 'Proud to be an msdian. A big fan of sivakarthikeyanism.',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 18,
            friends_count: 94,
            listed_count: 0,
            created_at: 'Tue Jan 17 08:03:50 +0000 2017',
            favourites_count: 389,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 1024,
            lang: 'en-gb',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/905664512933732352/V4kJlzZe_normal.jpg',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: false,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 01:51:31 +0000 2017',
            id: 916843468424601600,
            id_str: '916843468424601601',
            text: 'That smile ♥\n#Dhoni #Ranchi #INDvsAUS https://t.co/mGpu18BGw6',
            truncated: false,
            entities: {
              hashtags: [
                { text: 'Dhoni', indices: [13, 19] },
                { text: 'Ranchi', indices: [20, 27] },
                { text: 'INDvsAUS', indices: [28, 37] }
              ],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916843458215559200,
                  id_str: '916843458215559168',
                  indices: [38, 61],
                  media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  url: 'https://t.co/mGpu18BGw6',
                  display_url: 'pic.twitter.com/mGpu18BGw6',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                  type: 'photo',
                  sizes: {
                    small: { w: 680, h: 383, resize: 'fit' },
                    medium: { w: 1200, h: 675, resize: 'fit' },
                    large: { w: 1280, h: 720, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916843458215559200,
                  id_str: '916843458215559168',
                  indices: [38, 61],
                  media_url: 'http://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLlIRIGUQAAqPoJ.jpg',
                  url: 'https://t.co/mGpu18BGw6',
                  display_url: 'pic.twitter.com/mGpu18BGw6',
                  expanded_url: 'https://twitter.com/msdfansofficial/status/916843468424601601/photo/1',
                  type: 'photo',
                  sizes: {
                    small: { w: 680, h: 383, resize: 'fit' },
                    medium: { w: 1200, h: 675, resize: 'fit' },
                    large: { w: 1280, h: 720, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' }
                  }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 2962738476,
              id_str: '2962738476',
              name: 'MS Dhoni Fans #Dhoni',
              screen_name: 'msdfansofficial',
              location: 'Ranchi, India',
              description: 'Official Fan Club of Mahendra Singh Dhoni. insights & updates on MS Dhoni. #Dhoni @msdhoni https://t.co/DxND6ychgJ',
              url: 'https://t.co/vIL4WfRXaa',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/vIL4WfRXaa',
                      expanded_url: 'https://www.facebook.com/MSDhoniFansOfficial',
                      display_url: 'facebook.com/MSDhoniFansOff…',
                      indices: [0, 23]
                    }
                  ]
                },
                description: {
                  urls: [
                    {
                      url: 'https://t.co/DxND6ychgJ',
                      expanded_url: 'https://www.instagram.com/msdhonifansofficial/',
                      display_url: 'instagram.com/msdhonifansoff…',
                      indices: [91, 114]
                    }
                  ]
                }
              },
              protected: false,
              followers_count: 37410,
              friends_count: 28,
              listed_count: 24,
              created_at: 'Wed Jan 07 09:42:39 +0000 2015',
              favourites_count: 54,
              utc_offset: 19800,
              time_zone: 'Chennai',
              geo_enabled: true,
              verified: false,
              statuses_count: 5483,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme16/bg.gif',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme16/bg.gif',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/885034148255105024/XIGfTf3C_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/2962738476/1493447487',
              profile_link_color: '73CDF7',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 55,
            favorite_count: 382,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 55,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:44 +0000 2017',
          id: 917018676200579100,
          id_str: '917018676200579073',
          text: "RT @dna: WATCH: Virat Kohli playing with MS Dhoni's daughter Ziva is the cutest thing you'll see today! https://t.co/rsAovpXzIA https://t.c…",
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [{ screen_name: 'dna', name: 'DNA', id: 17710740, id_str: '17710740', indices: [3, 7] }],
            urls: [
              {
                url: 'https://t.co/rsAovpXzIA',
                expanded_url: 'http://dnai.in/f6r2',
                display_url: 'dnai.in/f6r2',
                indices: [104, 127]
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 140739269,
            id_str: '140739269',
            name: 'Shekhar_MUFC',
            screen_name: 'shekharlog',
            location: 'India',
            description: 'Big Sports Enthusiast | In love with @MANUTD | #TeamIndia | @DFB_Team Football | #CR7 | #MSD | Movies | Foodie | F1 | ForceIndia | Proud Indian |',
            url: 'https://t.co/0va3mvrN1I',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/0va3mvrN1I',
                    expanded_url: 'http://www.facebook.com/shekharlog',
                    display_url: 'facebook.com/shekharlog',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 723,
            friends_count: 881,
            listed_count: 20,
            created_at: 'Thu May 06 08:03:02 +0000 2010',
            favourites_count: 710,
            utc_offset: 19800,
            time_zone: 'Kolkata',
            geo_enabled: true,
            verified: false,
            statuses_count: 6600,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'C0DEED',
            profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000064601484/910df8a9d758d0d68b18a0988e629091.jpeg',
            profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000064601484/910df8a9d758d0d68b18a0988e629091.jpeg',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/844618594658996224/0a7Wh_o1_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/844618594658996224/0a7Wh_o1_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/140739269/1448163197',
            profile_link_color: '1281A3',
            profile_sidebar_border_color: 'FFFFFF',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 12:28:11 +0000 2017',
            id: 917003691273494500,
            id_str: '917003691273494528',
            text: "WATCH: Virat Kohli playing with MS Dhoni's daughter Ziva is the cutest thing you'll see today!… https://t.co/SmnHRYH3Pg",
            truncated: true,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [],
              urls: [
                {
                  url: 'https://t.co/SmnHRYH3Pg',
                  expanded_url: 'https://twitter.com/i/web/status/917003691273494528',
                  display_url: 'twitter.com/i/web/status/9…',
                  indices: [96, 119]
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 17710740,
              id_str: '17710740',
              name: 'DNA',
              screen_name: 'dna',
              location: 'India',
              description: 'Follow us for news, photos, videos and the latest trends from India and around the world. http://t.co/IZXefx3rSt',
              url: 'http://t.co/IZXefx3rSt',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'http://t.co/IZXefx3rSt',
                      expanded_url: 'http://www.dnaindia.com',
                      display_url: 'dnaindia.com',
                      indices: [0, 22]
                    }
                  ]
                },
                description: {
                  urls: [
                    {
                      url: 'http://t.co/IZXefx3rSt',
                      expanded_url: 'http://www.dnaindia.com',
                      display_url: 'dnaindia.com',
                      indices: [90, 112]
                    }
                  ]
                }
              },
              protected: false,
              followers_count: 1746066,
              friends_count: 354,
              listed_count: 3445,
              created_at: 'Fri Nov 28 15:39:38 +0000 2008',
              favourites_count: 92,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: false,
              verified: true,
              statuses_count: 414256,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'FFFFFF',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000175778006/yAHZPUM0.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000175778006/yAHZPUM0.jpeg',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/864432203370905601/yWa-6Q9O_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/864432203370905601/yWa-6Q9O_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/17710740/1507174704',
              profile_link_color: '1B95E0',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '542437',
              profile_text_color: 'C02942',
              profile_use_background_image: true,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'regular'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 8,
            favorite_count: 45,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 8,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:43 +0000 2017',
          id: 917018670249009200,
          id_str: '917018670249009153',
          text: 'RT @BrokenCricket: " Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'BrokenCricket',
                name: 'Broken Cricket',
                id: 907619970,
                id_str: '907619970',
                indices: [3, 17]
              }
            ],
            urls: []
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="https://mobile.twitter.com" rel="nofollow">Mobile Web (M2)</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 917018286910345200,
            id_str: '917018286910345218',
            name: 'BUY FOLLO₩ERS :yuk',
            screen_name: 'KilleanTessa',
            location: '',
            description: 'Check the first twěět for the Iiŉk \n\nref:riebfpnb',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 0,
            friends_count: 0,
            listed_count: 0,
            created_at: 'Sun Oct 08 13:26:11 +0000 2017',
            favourites_count: 0,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 279,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/917018585867853825/VzoICPy7_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/917018585867853825/VzoICPy7_normal.jpg',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: false,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 08:34:36 +0000 2017',
            id: 916944908337868800,
            id_str: '916944908337868800',
            text: '" Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
            truncated: false,
            entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 907619970,
              id_str: '907619970',
              name: 'Broken Cricket',
              screen_name: 'BrokenCricket',
              location: '',
              description: 'I was married to Sachin then fell in Love with Kohli now secretly dating AB',
              url: 'https://t.co/FBWn6henPH',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/FBWn6henPH',
                      expanded_url: 'https://www.facebook.com/BrokenCricketofficial/',
                      display_url: 'facebook.com/BrokenCricketo…',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 172513,
              friends_count: 87,
              listed_count: 246,
              created_at: 'Sat Oct 27 08:03:44 +0000 2012',
              favourites_count: 13615,
              utc_offset: 10800,
              time_zone: 'Athens',
              geo_enabled: false,
              verified: false,
              statuses_count: 31679,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/907619970/1498923596',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 363,
            favorite_count: 830,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 363,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:34 +0000 2017',
          id: 917018635352207400,
          id_str: '917018635352207360',
          text: 'RT @officialDhoniFC: These Smiles from our Inspiration, make our Super Sunday. #Dhoni #MSD #Ranchi #IndvAus #Mahi https://t.co/0mDXDrHobe',
          truncated: false,
          entities: {
            hashtags: [
              { text: 'Dhoni', indices: [79, 85] },
              { text: 'MSD', indices: [86, 90] },
              { text: 'Ranchi', indices: [91, 98] },
              { text: 'IndvAus', indices: [99, 107] },
              { text: 'Mahi', indices: [108, 113] }
            ],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'officialDhoniFC',
                name: '#Dhoni #Dhoni FC',
                id: 3019564778,
                id_str: '3019564778',
                indices: [3, 19]
              }
            ],
            urls: [],
            media: [
              {
                id: 916913274330812400,
                id_str: '916913274330812416',
                indices: [114, 137],
                media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                url: 'https://t.co/0mDXDrHobe',
                display_url: 'pic.twitter.com/0mDXDrHobe',
                expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                type: 'photo',
                sizes: {
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 1080, h: 1080, resize: 'fit' },
                  large: { w: 1080, h: 1080, resize: 'fit' },
                  small: { w: 680, h: 680, resize: 'fit' }
                },
                source_status_id: 916913305146474500,
                source_status_id_str: '916913305146474496',
                source_user_id: 1244185244,
                source_user_id_str: '1244185244'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916913274330812400,
                id_str: '916913274330812416',
                indices: [114, 137],
                media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                url: 'https://t.co/0mDXDrHobe',
                display_url: 'pic.twitter.com/0mDXDrHobe',
                expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                type: 'photo',
                sizes: {
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 1080, h: 1080, resize: 'fit' },
                  large: { w: 1080, h: 1080, resize: 'fit' },
                  small: { w: 680, h: 680, resize: 'fit' }
                },
                source_status_id: 916913305146474500,
                source_status_id_str: '916913305146474496',
                source_user_id: 1244185244,
                source_user_id_str: '1244185244'
              },
              {
                id: 916913293846966300,
                id_str: '916913293846966273',
                indices: [114, 137],
                media_url: 'http://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                media_url_https: 'https://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                url: 'https://t.co/0mDXDrHobe',
                display_url: 'pic.twitter.com/0mDXDrHobe',
                expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                type: 'photo',
                sizes: {
                  small: { w: 559, h: 547, resize: 'fit' },
                  large: { w: 559, h: 547, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  medium: { w: 559, h: 547, resize: 'fit' }
                },
                source_status_id: 916913305146474500,
                source_status_id_str: '916913305146474496',
                source_user_id: 1244185244,
                source_user_id_str: '1244185244'
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 902940305745338400,
            id_str: '902940305745338369',
            name: 'karthikeyan Palanisa',
            screen_name: 'karthikeyanPa10',
            location: 'Tamil Nadu, India',
            description: 'Sports Cricketers and Commentators Cricketers and Commentators Sports News, TV and Scores Entertainment South Indian Breaking News CEOs Business & CEOs',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 5,
            friends_count: 175,
            listed_count: 0,
            created_at: 'Wed Aug 30 17:05:19 +0000 2017',
            favourites_count: 9,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 344,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/903264169541025792/lF6bzcvg_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/903264169541025792/lF6bzcvg_normal.jpg',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 06:35:05 +0000 2017',
            id: 916914828081582100,
            id_str: '916914828081582080',
            text: 'These Smiles from our Inspiration, make our Super Sunday. #Dhoni #MSD #Ranchi #IndvAus #Mahi https://t.co/0mDXDrHobe',
            truncated: false,
            entities: {
              hashtags: [
                { text: 'Dhoni', indices: [58, 64] },
                { text: 'MSD', indices: [65, 69] },
                { text: 'Ranchi', indices: [70, 77] },
                { text: 'IndvAus', indices: [78, 86] },
                { text: 'Mahi', indices: [87, 92] }
              ],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916913274330812400,
                  id_str: '916913274330812416',
                  indices: [93, 116],
                  media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  url: 'https://t.co/0mDXDrHobe',
                  display_url: 'pic.twitter.com/0mDXDrHobe',
                  expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  },
                  source_status_id: 916913305146474500,
                  source_status_id_str: '916913305146474496',
                  source_user_id: 1244185244,
                  source_user_id_str: '1244185244'
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916913274330812400,
                  id_str: '916913274330812416',
                  indices: [93, 116],
                  media_url: 'http://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLmHw9ZUEAAE3Yn.jpg',
                  url: 'https://t.co/0mDXDrHobe',
                  display_url: 'pic.twitter.com/0mDXDrHobe',
                  expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                  type: 'photo',
                  sizes: {
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 1080, h: 1080, resize: 'fit' },
                    large: { w: 1080, h: 1080, resize: 'fit' },
                    small: { w: 680, h: 680, resize: 'fit' }
                  },
                  source_status_id: 916913305146474500,
                  source_status_id_str: '916913305146474496',
                  source_user_id: 1244185244,
                  source_user_id_str: '1244185244'
                },
                {
                  id: 916913293846966300,
                  id_str: '916913293846966273',
                  indices: [93, 116],
                  media_url: 'http://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                  media_url_https: 'https://pbs.twimg.com/media/DLmHyGGU8AEbRO4.jpg',
                  url: 'https://t.co/0mDXDrHobe',
                  display_url: 'pic.twitter.com/0mDXDrHobe',
                  expanded_url: 'https://twitter.com/imDhoni_fc/status/916913305146474496/photo/1',
                  type: 'photo',
                  sizes: {
                    small: { w: 559, h: 547, resize: 'fit' },
                    large: { w: 559, h: 547, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    medium: { w: 559, h: 547, resize: 'fit' }
                  },
                  source_status_id: 916913305146474500,
                  source_status_id_str: '916913305146474496',
                  source_user_id: 1244185244,
                  source_user_id_str: '1244185244'
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="https://ifttt.com" rel="nofollow">IFTTT</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 3019564778,
              id_str: '3019564778',
              name: '#Dhoni #Dhoni FC',
              screen_name: 'officialDhoniFC',
              location: 'India √',
              description: '#MsDhoni #Dhoni\r\n#MsDhoni #Dhoni\r\n#MsDhoni #Dhoni\r\nMsDhoni Dhoni\r\n#MsDhoni #Dhoni\r\nMsDhoni Dhoni\r\n#MsDhoni #Dhoni\r\nMsDhoni Dhoni\r\nMsDhoni Dhoni\r\n#Dhoni  #Dhoni',
              url: 'https://t.co/CjQ5gS1lWY',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/CjQ5gS1lWY',
                      expanded_url: 'http://Espncricinfo.com',
                      display_url: 'Espncricinfo.com',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 35745,
              friends_count: 25,
              listed_count: 76,
              created_at: 'Sat Feb 14 11:51:57 +0000 2015',
              favourites_count: 1091,
              utc_offset: 18000,
              time_zone: 'Karachi',
              geo_enabled: false,
              verified: false,
              statuses_count: 26152,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/911771392013688832/tZEKmYJa_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/911771392013688832/tZEKmYJa_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/3019564778/1506218219',
              profile_link_color: 'FA743E',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 2,
            favorite_count: 10,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 2,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:27:16 +0000 2017',
          id: 917018558093156400,
          id_str: '917018558093156352',
          text: 'RT @DHONIism: Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
          truncated: false,
          entities: {
            hashtags: [{ text: 'Ziva', indices: [30, 35] }],
            symbols: [],
            user_mentions: [
              { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
            ],
            urls: [],
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'photo',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'video',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635',
                video_info: {
                  aspect_ratio: [20, 11],
                  duration_millis: 29267,
                  variants: [
                    {
                      bitrate: 320000,
                      content_type: 'video/mp4',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                    },
                    {
                      content_type: 'application/x-mpegURL',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                    }
                  ]
                },
                additional_media_info: {
                  monetizable: false,
                  source_user: {
                    id: 1727522635,
                    id_str: '1727522635',
                    name: 'DHONIsm ♥',
                    screen_name: 'DHONIism',
                    location: 'from Tamil Nadu to World :)',
                    description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                    url: 'https://t.co/VSrp5PXoY5',
                    entities: {
                      url: {
                        urls: [
                          {
                            url: 'https://t.co/VSrp5PXoY5',
                            expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                            display_url: 'facebook.com/BleedDhonIsm',
                            indices: [0, 23]
                          }
                        ]
                      },
                      description: { urls: [] }
                    },
                    protected: false,
                    followers_count: 133889,
                    friends_count: 23,
                    listed_count: 32,
                    created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                    favourites_count: 743,
                    utc_offset: 19800,
                    time_zone: 'New Delhi',
                    geo_enabled: true,
                    verified: false,
                    statuses_count: 7310,
                    lang: 'en',
                    contributors_enabled: false,
                    is_translator: false,
                    is_translation_enabled: false,
                    profile_background_color: 'C0DEED',
                    profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_tile: true,
                    profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                    profile_link_color: '0084B4',
                    profile_sidebar_border_color: 'FFFFFF',
                    profile_sidebar_fill_color: 'DDEEF6',
                    profile_text_color: '333333',
                    profile_use_background_image: true,
                    has_extended_profile: true,
                    default_profile: false,
                    default_profile_image: false,
                    following: false,
                    follow_request_sent: false,
                    notifications: false,
                    translator_type: 'none'
                  }
                }
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 585334504,
            id_str: '585334504',
            name: 'Mersal Bharath',
            screen_name: 'BharathTinz',
            location: 'Chennai, India',
            description: 'Thalapathy Veriyan! 😎😎😍 MSDian! ❤❤❤❤ Amateur photographer. 😁😝  Co-founder and Director of Photography : @sutta_vada',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 323,
            friends_count: 300,
            listed_count: 6,
            created_at: 'Sun May 20 03:44:18 +0000 2012',
            favourites_count: 63493,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 26125,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'C0DEED',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/916934292697104384/eKW4W9C1_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/916934292697104384/eKW4W9C1_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/585334504/1507449149',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 12:03:19 +0000 2017',
            id: 916997430331162600,
            id_str: '916997430331162624',
            text: 'Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Ziva', indices: [16, 21] }],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'photo',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'video',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  video_info: {
                    aspect_ratio: [20, 11],
                    duration_millis: 29267,
                    variants: [
                      {
                        bitrate: 320000,
                        content_type: 'video/mp4',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                      },
                      {
                        content_type: 'application/x-mpegURL',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                      }
                    ]
                  },
                  additional_media_info: { monetizable: false }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 1727522635,
              id_str: '1727522635',
              name: 'DHONIsm ♥',
              screen_name: 'DHONIism',
              location: 'from Tamil Nadu to World :)',
              description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
              url: 'https://t.co/VSrp5PXoY5',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/VSrp5PXoY5',
                      expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                      display_url: 'facebook.com/BleedDhonIsm',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 133889,
              friends_count: 23,
              listed_count: 32,
              created_at: 'Wed Sep 04 03:52:58 +0000 2013',
              favourites_count: 743,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 7310,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_tile: true,
              profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
              profile_link_color: '0084B4',
              profile_sidebar_border_color: 'FFFFFF',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 112,
            favorite_count: 309,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 112,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:26:59 +0000 2017',
          id: 917018488534732800,
          id_str: '917018488534732805',
          text: 'RT @BrokenCricket: " Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'BrokenCricket',
                name: 'Broken Cricket',
                id: 907619970,
                id_str: '907619970',
                indices: [3, 17]
              }
            ],
            urls: []
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 144089436,
            id_str: '144089436',
            name: 'Jegan',
            screen_name: 'IamJegan',
            location: 'Tuticorin / Trichy / Chennai',
            description: 'A Big Fanatic of @SGanguly99. Want him to Coach Team India & Lift the World Cup! Thala Ajith Addict!',
            url: 'https://t.co/lyD9bn1TXG',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/lyD9bn1TXG',
                    expanded_url: 'http://thecineket.com',
                    display_url: 'thecineket.com',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 3270,
            friends_count: 281,
            listed_count: 15,
            created_at: 'Sat May 15 07:56:02 +0000 2010',
            favourites_count: 778,
            utc_offset: 19800,
            time_zone: 'Chennai',
            geo_enabled: true,
            verified: false,
            statuses_count: 31673,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '352726',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme5/bg.gif',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme5/bg.gif',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/906201523725623296/pHeFZ-tQ_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/906201523725623296/pHeFZ-tQ_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/144089436/1436104530',
            profile_link_color: 'D02B55',
            profile_sidebar_border_color: '829D5E',
            profile_sidebar_fill_color: '99CC33',
            profile_text_color: '3E4415',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 08:34:36 +0000 2017',
            id: 916944908337868800,
            id_str: '916944908337868800',
            text: '" Ganguly sacrificed his opening spot for me and His No.3 Batting position for Dhoni " ~ Virender Sehwag',
            truncated: false,
            entities: { hashtags: [], symbols: [], user_mentions: [], urls: [] },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 907619970,
              id_str: '907619970',
              name: 'Broken Cricket',
              screen_name: 'BrokenCricket',
              location: '',
              description: 'I was married to Sachin then fell in Love with Kohli now secretly dating AB',
              url: 'https://t.co/FBWn6henPH',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/FBWn6henPH',
                      expanded_url: 'https://www.facebook.com/BrokenCricketofficial/',
                      display_url: 'facebook.com/BrokenCricketo…',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 172513,
              friends_count: 87,
              listed_count: 246,
              created_at: 'Sat Oct 27 08:03:44 +0000 2012',
              favourites_count: 13615,
              utc_offset: 10800,
              time_zone: 'Athens',
              geo_enabled: false,
              verified: false,
              statuses_count: 31679,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/708878735190007809/v7q2Jzfv_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/907619970/1498923596',
              profile_link_color: '1DA1F2',
              profile_sidebar_border_color: 'C0DEED',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: true,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 363,
            favorite_count: 830,
            favorited: false,
            retweeted: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 363,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:26:34 +0000 2017',
          id: 917018382884495400,
          id_str: '917018382884495360',
          text: 'RT @DHONIism: Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
          truncated: false,
          entities: {
            hashtags: [{ text: 'Ziva', indices: [30, 35] }],
            symbols: [],
            user_mentions: [
              { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
            ],
            urls: [],
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'photo',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'video',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635',
                video_info: {
                  aspect_ratio: [20, 11],
                  duration_millis: 29267,
                  variants: [
                    {
                      bitrate: 320000,
                      content_type: 'video/mp4',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                    },
                    {
                      content_type: 'application/x-mpegURL',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                    }
                  ]
                },
                additional_media_info: {
                  monetizable: false,
                  source_user: {
                    id: 1727522635,
                    id_str: '1727522635',
                    name: 'DHONIsm ♥',
                    screen_name: 'DHONIism',
                    location: 'from Tamil Nadu to World :)',
                    description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                    url: 'https://t.co/VSrp5PXoY5',
                    entities: {
                      url: {
                        urls: [
                          {
                            url: 'https://t.co/VSrp5PXoY5',
                            expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                            display_url: 'facebook.com/BleedDhonIsm',
                            indices: [0, 23]
                          }
                        ]
                      },
                      description: { urls: [] }
                    },
                    protected: false,
                    followers_count: 133889,
                    friends_count: 23,
                    listed_count: 32,
                    created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                    favourites_count: 743,
                    utc_offset: 19800,
                    time_zone: 'New Delhi',
                    geo_enabled: true,
                    verified: false,
                    statuses_count: 7310,
                    lang: 'en',
                    contributors_enabled: false,
                    is_translator: false,
                    is_translation_enabled: false,
                    profile_background_color: 'C0DEED',
                    profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_tile: true,
                    profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                    profile_link_color: '0084B4',
                    profile_sidebar_border_color: 'FFFFFF',
                    profile_sidebar_fill_color: 'DDEEF6',
                    profile_text_color: '333333',
                    profile_use_background_image: true,
                    has_extended_profile: true,
                    default_profile: false,
                    default_profile_image: false,
                    following: false,
                    follow_request_sent: false,
                    notifications: false,
                    translator_type: 'none'
                  }
                }
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 3174923622,
            id_str: '3174923622',
            name: 'Aяνιηтн',
            screen_name: 'ArvinthVj',
            location: 'Erode, India',
            description: 'சராசரி இந்திய ப்ரஜை || Mech || Cine | Tech freak\n|| A man in search is the Man Indeed || Proud Gixxeriann😎',
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 5112,
            friends_count: 465,
            listed_count: 22,
            created_at: 'Sun Apr 26 05:37:28 +0000 2015',
            favourites_count: 16446,
            utc_offset: 19800,
            time_zone: 'New Delhi',
            geo_enabled: true,
            verified: false,
            statuses_count: 28355,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '642D8B',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme10/bg.gif',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme10/bg.gif',
            profile_background_tile: true,
            profile_image_url: 'http://pbs.twimg.com/profile_images/911612405133615104/Lmh9E_-S_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/911612405133615104/Lmh9E_-S_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/3174923622/1505735402',
            profile_link_color: 'FF0000',
            profile_sidebar_border_color: '65B0DA',
            profile_sidebar_fill_color: '7AC3EE',
            profile_text_color: '3D1957',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 12:03:19 +0000 2017',
            id: 916997430331162600,
            id_str: '916997430331162624',
            text: 'Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Ziva', indices: [16, 21] }],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'photo',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'video',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  video_info: {
                    aspect_ratio: [20, 11],
                    duration_millis: 29267,
                    variants: [
                      {
                        bitrate: 320000,
                        content_type: 'video/mp4',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                      },
                      {
                        content_type: 'application/x-mpegURL',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                      }
                    ]
                  },
                  additional_media_info: { monetizable: false }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 1727522635,
              id_str: '1727522635',
              name: 'DHONIsm ♥',
              screen_name: 'DHONIism',
              location: 'from Tamil Nadu to World :)',
              description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
              url: 'https://t.co/VSrp5PXoY5',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/VSrp5PXoY5',
                      expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                      display_url: 'facebook.com/BleedDhonIsm',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 133889,
              friends_count: 23,
              listed_count: 32,
              created_at: 'Wed Sep 04 03:52:58 +0000 2013',
              favourites_count: 743,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 7310,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_tile: true,
              profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
              profile_link_color: '0084B4',
              profile_sidebar_border_color: 'FFFFFF',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 112,
            favorite_count: 309,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 112,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:26:30 +0000 2017',
          id: 917018367281655800,
          id_str: '917018367281655808',
          text: 'RT @FirstCric: "Had Sourav Ganguly not promoted Dhoni to No 3, he wouldn’t have become such a great player," says Virender Sehwag\nhttps://t…',
          truncated: false,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [
              {
                screen_name: 'FirstCric',
                name: 'FirstCricket',
                id: 888369388906135600,
                id_str: '888369388906135552',
                indices: [3, 13]
              }
            ],
            urls: []
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 1348006476,
            id_str: '1348006476',
            name: 'A',
            screen_name: 'Arijitme',
            location: 'India',
            description: '#Believeinyourself#NeverGiveup inlife#Entrepreneur#Dreamer#Achiever#Chelsea#Moviebuff#PremierLeague.. Events - DM for Enquiries',
            url: 'https://t.co/SE8gkxhOkj',
            entities: {
              url: {
                urls: [
                  {
                    url: 'https://t.co/SE8gkxhOkj',
                    expanded_url: 'https://movewanderlust.com',
                    display_url: 'movewanderlust.com',
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 132,
            friends_count: 197,
            listed_count: 10,
            created_at: 'Sat Apr 13 00:26:28 +0000 2013',
            favourites_count: 2730,
            utc_offset: 19800,
            time_zone: 'New Delhi',
            geo_enabled: true,
            verified: false,
            statuses_count: 6076,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: '022330',
            profile_background_image_url: 'http://abs.twimg.com/images/themes/theme15/bg.png',
            profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme15/bg.png',
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/908981012352212992/Vf0kJ9Ha_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/908981012352212992/Vf0kJ9Ha_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/1348006476/1498468283',
            profile_link_color: '0084B4',
            profile_sidebar_border_color: 'A8C7F7',
            profile_sidebar_fill_color: 'C0DFEC',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 13:21:10 +0000 2017',
            id: 917017025662263300,
            id_str: '917017025662263296',
            text: '"Had Sourav Ganguly not promoted Dhoni to No 3, he wouldn’t have become such a great player," says Virender Sehwag\nhttps://t.co/FIANVgKeRI',
            truncated: false,
            entities: {
              hashtags: [],
              symbols: [],
              user_mentions: [],
              urls: [
                {
                  url: 'https://t.co/FIANVgKeRI',
                  expanded_url: 'http://www.firstpost.com/firstcricket/sports-news/sourav-ganguly-sacrificed-his-batting-spot-to-make-ms-dhoni-a-great-player-says-virender-sehwag-4121625.html',
                  display_url: 'firstpost.com/firstcricket/s…',
                  indices: [115, 138]
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="https://about.twitter.com/products/tweetdeck" rel="nofollow">TweetDeck</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 888369388906135600,
              id_str: '888369388906135552',
              name: 'FirstCricket',
              screen_name: 'FirstCric',
              location: '',
              description: 'Bringing you live updates, breaking news, opinions and photos from the world of cricket',
              url: 'https://t.co/X7UPznamYz',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/X7UPznamYz',
                      expanded_url: 'http://www.firstpost.com/firstcricket/',
                      display_url: 'firstpost.com/firstcricket/',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 603,
              friends_count: 47,
              listed_count: 9,
              created_at: 'Fri Jul 21 12:05:42 +0000 2017',
              favourites_count: 0,
              utc_offset: -25200,
              time_zone: 'Pacific Time (US & Canada)',
              geo_enabled: false,
              verified: false,
              statuses_count: 3114,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: '000000',
              profile_background_image_url: 'http://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme1/bg.png',
              profile_background_tile: false,
              profile_image_url: 'http://pbs.twimg.com/profile_images/888370591685726208/Jr6laI3X_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/888370591685726208/Jr6laI3X_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/888369388906135552/1502726156',
              profile_link_color: 'A6CE39',
              profile_sidebar_border_color: '000000',
              profile_sidebar_fill_color: '000000',
              profile_text_color: '000000',
              profile_use_background_image: false,
              has_extended_profile: false,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 3,
            favorite_count: 2,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 3,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          lang: 'en'
        },
        {
          created_at: 'Sun Oct 08 13:25:55 +0000 2017',
          id: 917018217792417800,
          id_str: '917018217792417792',
          text: 'RT @DHONIism: Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
          truncated: false,
          entities: {
            hashtags: [{ text: 'Ziva', indices: [30, 35] }],
            symbols: [],
            user_mentions: [
              { screen_name: 'DHONIism', name: 'DHONIsm ♥', id: 1727522635, id_str: '1727522635', indices: [3, 12] }
            ],
            urls: [],
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'photo',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635'
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 916997015497613300,
                id_str: '916997015497613313',
                indices: [62, 85],
                media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                url: 'https://t.co/nzngJRmy81',
                display_url: 'pic.twitter.com/nzngJRmy81',
                expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                type: 'video',
                sizes: {
                  medium: { w: 600, h: 330, resize: 'fit' },
                  large: { w: 640, h: 352, resize: 'fit' },
                  thumb: { w: 150, h: 150, resize: 'crop' },
                  small: { w: 340, h: 187, resize: 'fit' }
                },
                source_status_id: 916997430331162600,
                source_status_id_str: '916997430331162624',
                source_user_id: 1727522635,
                source_user_id_str: '1727522635',
                video_info: {
                  aspect_ratio: [20, 11],
                  duration_millis: 29267,
                  variants: [
                    {
                      bitrate: 320000,
                      content_type: 'video/mp4',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                    },
                    {
                      content_type: 'application/x-mpegURL',
                      url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                    }
                  ]
                },
                additional_media_info: {
                  monetizable: false,
                  source_user: {
                    id: 1727522635,
                    id_str: '1727522635',
                    name: 'DHONIsm ♥',
                    screen_name: 'DHONIism',
                    location: 'from Tamil Nadu to World :)',
                    description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
                    url: 'https://t.co/VSrp5PXoY5',
                    entities: {
                      url: {
                        urls: [
                          {
                            url: 'https://t.co/VSrp5PXoY5',
                            expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                            display_url: 'facebook.com/BleedDhonIsm',
                            indices: [0, 23]
                          }
                        ]
                      },
                      description: { urls: [] }
                    },
                    protected: false,
                    followers_count: 133889,
                    friends_count: 23,
                    listed_count: 32,
                    created_at: 'Wed Sep 04 03:52:58 +0000 2013',
                    favourites_count: 743,
                    utc_offset: 19800,
                    time_zone: 'New Delhi',
                    geo_enabled: true,
                    verified: false,
                    statuses_count: 7310,
                    lang: 'en',
                    contributors_enabled: false,
                    is_translator: false,
                    is_translation_enabled: false,
                    profile_background_color: 'C0DEED',
                    profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
                    profile_background_tile: true,
                    profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
                    profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
                    profile_link_color: '0084B4',
                    profile_sidebar_border_color: 'FFFFFF',
                    profile_sidebar_fill_color: 'DDEEF6',
                    profile_text_color: '333333',
                    profile_use_background_image: true,
                    has_extended_profile: true,
                    default_profile: false,
                    default_profile_image: false,
                    following: false,
                    follow_request_sent: false,
                    notifications: false,
                    translator_type: 'none'
                  }
                }
              }
            ]
          },
          metadata: { iso_language_code: 'en', result_type: 'recent' },
          source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 871408030474162200,
            id_str: '871408030474162176',
            name: 'MS Dhoni',
            screen_name: 'MSDhoni85350822',
            location: 'Bengaluru South, India',
            description: "I love my country india💙\n                                            I'm a fan of MS Dhoni and Rajinikanth..💖\n                  👉Pawan kalyan is my Heart💖..",
            url: null,
            entities: { description: { urls: [] } },
            protected: false,
            followers_count: 76,
            friends_count: 381,
            listed_count: 1,
            created_at: 'Sun Jun 04 16:47:19 +0000 2017',
            favourites_count: 3276,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 2141,
            lang: 'en',
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: 'F5F8FA',
            profile_background_image_url: null,
            profile_background_image_url_https: null,
            profile_background_tile: false,
            profile_image_url: 'http://pbs.twimg.com/profile_images/916849356094844928/i7JSZkxX_normal.jpg',
            profile_image_url_https: 'https://pbs.twimg.com/profile_images/916849356094844928/i7JSZkxX_normal.jpg',
            profile_banner_url: 'https://pbs.twimg.com/profile_banners/871408030474162176/1502765044',
            profile_link_color: '1DA1F2',
            profile_sidebar_border_color: 'C0DEED',
            profile_sidebar_fill_color: 'DDEEF6',
            profile_text_color: '333333',
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: true,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: 'none'
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          retweeted_status: {
            created_at: 'Sun Oct 08 12:03:19 +0000 2017',
            id: 916997430331162600,
            id_str: '916997430331162624',
            text: 'Little princess #Ziva Dhoni with Virat Kohli 😇😚 https://t.co/nzngJRmy81',
            truncated: false,
            entities: {
              hashtags: [{ text: 'Ziva', indices: [16, 21] }],
              symbols: [],
              user_mentions: [],
              urls: [],
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'photo',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  }
                }
              ]
            },
            extended_entities: {
              media: [
                {
                  id: 916997015497613300,
                  id_str: '916997015497613313',
                  indices: [48, 71],
                  media_url: 'http://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  media_url_https: 'https://pbs.twimg.com/ext_tw_video_thumb/916997015497613313/pu/img/mzQhmFYnoKza0NyV.jpg',
                  url: 'https://t.co/nzngJRmy81',
                  display_url: 'pic.twitter.com/nzngJRmy81',
                  expanded_url: 'https://twitter.com/DHONIism/status/916997430331162624/video/1',
                  type: 'video',
                  sizes: {
                    medium: { w: 600, h: 330, resize: 'fit' },
                    large: { w: 640, h: 352, resize: 'fit' },
                    thumb: { w: 150, h: 150, resize: 'crop' },
                    small: { w: 340, h: 187, resize: 'fit' }
                  },
                  video_info: {
                    aspect_ratio: [20, 11],
                    duration_millis: 29267,
                    variants: [
                      {
                        bitrate: 320000,
                        content_type: 'video/mp4',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/vid/326x180/1Kk5KfAF2IJpsDK7.mp4'
                      },
                      {
                        content_type: 'application/x-mpegURL',
                        url: 'https://video.twimg.com/ext_tw_video/916997015497613313/pu/pl/YtDUNh6HUL4B4mRn.m3u8'
                      }
                    ]
                  },
                  additional_media_info: { monetizable: false }
                }
              ]
            },
            metadata: { iso_language_code: 'en', result_type: 'recent' },
            source: '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
            in_reply_to_status_id: null,
            in_reply_to_status_id_str: null,
            in_reply_to_user_id: null,
            in_reply_to_user_id_str: null,
            in_reply_to_screen_name: null,
            user: {
              id: 1727522635,
              id_str: '1727522635',
              name: 'DHONIsm ♥',
              screen_name: 'DHONIism',
              location: 'from Tamil Nadu to World :)',
              description: 'Mahendra Singh Dhoni♥\nBleed DHONIsm ♥ ♥ Spread MAHImania  ♥ ♥ ♥ It is an one-stop portal for all the fanatics of MSD. We are committed to emanate first on net u',
              url: 'https://t.co/VSrp5PXoY5',
              entities: {
                url: {
                  urls: [
                    {
                      url: 'https://t.co/VSrp5PXoY5',
                      expanded_url: 'https://www.facebook.com/BleedDhonIsm',
                      display_url: 'facebook.com/BleedDhonIsm',
                      indices: [0, 23]
                    }
                  ]
                },
                description: { urls: [] }
              },
              protected: false,
              followers_count: 133889,
              friends_count: 23,
              listed_count: 32,
              created_at: 'Wed Sep 04 03:52:58 +0000 2013',
              favourites_count: 743,
              utc_offset: 19800,
              time_zone: 'New Delhi',
              geo_enabled: true,
              verified: false,
              statuses_count: 7310,
              lang: 'en',
              contributors_enabled: false,
              is_translator: false,
              is_translation_enabled: false,
              profile_background_color: 'C0DEED',
              profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/378800000159518592/7KeEn_eJ.jpeg',
              profile_background_tile: true,
              profile_image_url: 'http://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_image_url_https: 'https://pbs.twimg.com/profile_images/897172356145192960/64ihqcG1_normal.jpg',
              profile_banner_url: 'https://pbs.twimg.com/profile_banners/1727522635/1488107740',
              profile_link_color: '0084B4',
              profile_sidebar_border_color: 'FFFFFF',
              profile_sidebar_fill_color: 'DDEEF6',
              profile_text_color: '333333',
              profile_use_background_image: true,
              has_extended_profile: true,
              default_profile: false,
              default_profile_image: false,
              following: false,
              follow_request_sent: false,
              notifications: false,
              translator_type: 'none'
            },
            geo: null,
            coordinates: null,
            place: null,
            contributors: null,
            is_quote_status: false,
            retweet_count: 112,
            favorite_count: 309,
            favorited: false,
            retweeted: false,
            possibly_sensitive: false,
            lang: 'en'
          },
          is_quote_status: false,
          retweet_count: 112,
          favorite_count: 0,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          lang: 'en'
        }
      ]
    },
    searchStatus: { loaded: true, error: false, errorMsg: '' },
    itemData: {
      text: "CUTE | Virat Kohli having fun with MS Dhoni's daughter Ziva | Must Watch | Virat Fans.: https://t.co/E11Ex214lc via @YouTube",
      username: 'Rockstar'
    }
  });
});
