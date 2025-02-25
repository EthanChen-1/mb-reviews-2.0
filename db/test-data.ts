import {
  TEST_ADMIN_EMAIL,
  TEST_ADMIN_NAME,
  TEST_ADMIN_PASSWORD,
  TEST_ADMIN_ROLE,
  TEST_USER_EMAIL,
  TEST_USER_NAME,
  TEST_USER_PASSWORD,
  TEST_USER_ROLE,
} from "@/lib/constants";
import { hashSync } from "bcrypt-ts-edge";

export const testData = {
  kind: "youtube#playlistItemListResponse",
  etag: "9qXiJSqjcx-3uwbLR58YlJ2NKJo",
  nextPageToken:
    "EAAafVBUOkNBZ2lFREV6UmpJelJFTTBNVGhFUkRVME1EUW9BVWpkazhMU3pxQ0xBMUFCV2pnaVEyaG9WbFpWWkcxWlYyUmFaR3hvZGxKR09YSmtSRXB1VFd4V1RtVkdUVEZYUjJOVFJFRnFRM05mVXpoQ2FFUkpOWE16T0VGUkln",
  items: [
    {
      kind: "youtube#playlistItem",
      etag: "4Vgb4NIrLb73hjy1M2B8iTrcDe4",
      id: "VVVHZmFnWXZYb0Rfa3QyZzJVTXhTNVhnLnJ0ZTU2ME5LZGhF",
      snippet: {
        publishedAt: "2025-01-31T18:43:13Z",
        channelId: "UCGfagYvXoD_kt2g2UMxS5Xg",
        title: "Lamzu Maya X Mouse Review",
        description:
          "A mouse review of the Lamzu Maya X by Mausbert.\n\nMicrophone quality issues are tough to fix and I record in an untreated room which makes it especially bad but I'm working towards making it better.\n\nIf you enjoyed the video make sure to like and subscribe and leave a comment down below!\n\n0:00 Introduction\n0:13 Technical Specifications\n0:37 What's In the Box?\n0:46 Build Quality\n2:05 Some Issues\n2:30 Mouse Comparisons\n3:27 Sensor Tests\n4:43 Final Thoughts\n\n✘ Title: Curse of the Scarab\n✘ Music: Kevin MacLeod\n✘ License: CC BY 3.0 (http://goo.gl/BlcHZR)\n✘ Download: http://incompetech.com/music/royalty-...\n\n#mousereview #lamzu #gamingmouse",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/rte560NKdhE/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/rte560NKdhE/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/rte560NKdhE/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/rte560NKdhE/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/rte560NKdhE/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "Mausbert",
        playlistId: "UUGfagYvXoD_kt2g2UMxS5Xg",
        position: 0,
        resourceId: {
          kind: "youtube#video",
          videoId: "rte560NKdhE",
        },
        videoOwnerChannelTitle: "Mausbert",
        videoOwnerChannelId: "UCGfagYvXoD_kt2g2UMxS5Xg",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "7f2RydRF8Q2rrh1UGeoWNgnQymY",
      id: "VVVHZmFnWXZYb0Rfa3QyZzJVTXhTNVhnLm5GdEtzTVdabFVN",
      snippet: {
        publishedAt: "2025-01-06T19:33:45Z",
        channelId: "UCGfagYvXoD_kt2g2UMxS5Xg",
        title: "Pulsar X2H Medium Mouse Review",
        description:
          "A review of the Pulsar X2H by Mausbert.\n\nIf you enjoyed the video be sure to like, subscribe, and leave a comment down below!\n\nVideo Chapters\n0:00 Introduction\n0:13 Technical Specifications\n0:40 What's inside the box?\n0:46 Build Quality\n1:08 Mouse Composition\n1:22 Mouse Feet\n1:30 Main Mouse Buttons\n1:50 Side Buttons\n2:00 Scroll Wheel\n2:12 Shape & Grip\n2:43 Sound Tests\n3:00 Mouse Comparisons\n3:30 1K,2K, & 4K Sensor Tests\n4:54 Thoughts on Sensor\n5:10 How to Pair With 4K Dongle\n5:30 Final Thoughts\n\nPulsar X2H Technical Specifications\nMouse Sensor: PixArt PAW3395\nMain Mouse Switches: Optical\nSide Mouse/ Middle Mouse Switch: Huano Mechanical\nLength: 4.72in / 120mm\nWidth: 2.56in / 65mm\r\nHeight: 1.54in / 39mm\nWeight: 54 grams\nPolling Rate: 125 Hz - 4,000 Hz\n\nCipher Kevin MacLeod (incompetech.com)\nLicensed under Creative Commons: By Attribution 3.0 License\nhttp://creativecommons.org/licenses/by/3.0/\n\n#mousereview #pulsar  #pulsarx2h #gamingmouse",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/nFtKsMWZlUM/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/nFtKsMWZlUM/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/nFtKsMWZlUM/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/nFtKsMWZlUM/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/nFtKsMWZlUM/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "Mausbert",
        playlistId: "UUGfagYvXoD_kt2g2UMxS5Xg",
        position: 1,
        resourceId: {
          kind: "youtube#video",
          videoId: "nFtKsMWZlUM",
        },
        videoOwnerChannelTitle: "Mausbert",
        videoOwnerChannelId: "UCGfagYvXoD_kt2g2UMxS5Xg",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "5ZMF5LZRJDN8N0bi_yH_uaS_Oyc",
      id: "VVVHZmFnWXZYb0Rfa3QyZzJVTXhTNVhnLlp5OUFEa0FPaHFV",
      snippet: {
        publishedAt: "2024-12-21T05:02:45Z",
        channelId: "UCGfagYvXoD_kt2g2UMxS5Xg",
        title: "The Razer Viper Mini in 2024",
        description:
          'Throw back review of the Razer Viper Mini by Mausbert.\n\nIf you enjoyed the video be sure to like, subscribe, and leave a comment down below!\n\nVideo Chapters\n0:00 Introduction\n0:17 The Landscape of Mice in 2020\n0:43 The Razer Viper Mini\n1:00 Negatives\n1:19 Build Quality\n1:48 Shape\n2:00 Final Thoughts\n\n● Music By: Michael Hildreth (Guitar)\n-Track Name: \'Lakey Inspired "Gardens" Guitar Cover\'\n-Follow Michael Hildreth on Soundcloud HERE -   / user-602857531  \n-SUBSCRIBE to the official Michael Hildreth YouTube Channel HERE:    / channel  \n ● Background Tracks/Drums Credit: LAKEY INSPIRED\nTrack Name: "Gardens"\nMusic By: LAKEY INSPIRED @   / lakeyinspired  \nOfficial "LAKEY INSPIRED" YouTube Channel HERE -    / @lakeyinspired  \nLicense for commercial use: Creative Commons Attribution 3.0 Unported "Share Alike" (CC BY-SA 3.0) License.\nFull License HERE - https://creativecommons.org/licenses/...\n\n#mousereview #razer #razervipermini',
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Zy9ADkAOhqU/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Zy9ADkAOhqU/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Zy9ADkAOhqU/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/Zy9ADkAOhqU/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/Zy9ADkAOhqU/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "Mausbert",
        playlistId: "UUGfagYvXoD_kt2g2UMxS5Xg",
        position: 2,
        resourceId: {
          kind: "youtube#video",
          videoId: "Zy9ADkAOhqU",
        },
        videoOwnerChannelTitle: "Mausbert",
        videoOwnerChannelId: "UCGfagYvXoD_kt2g2UMxS5Xg",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "6ASwbOoY9QkzmJu0bP99unXzzG0",
      id: "VVVHZmFnWXZYb0Rfa3QyZzJVTXhTNVhnLmtTVHMwQ2tFeGNF",
      snippet: {
        publishedAt: "2024-12-04T21:57:20Z",
        channelId: "UCGfagYvXoD_kt2g2UMxS5Xg",
        title:
          "The Best Mouse You Probably Shouldn’t Buy - The OP1 8K 1 Month Later",
        description:
          'A full review of the OP1 8K after one month of usage by Mausbert\n\nVideo Chapters\n0:00 Introduction\n0:30 Build Quality\n1:50 Shape and Grip\n2:14 Clicks\n3:32 Pricing and Final Thoughts\n\n● Music By: Michael Hildreth (Guitar)\n-Track Name: \'Lakey Inspired "Gardens" Guitar Cover\'\n-Follow Michael Hildreth on Soundcloud HERE -   / user-602857531  \n-SUBSCRIBE to the official Michael Hildreth YouTube Channel HERE:    / channel  \n ● Background Tracks/Drums Credit: LAKEY INSPIRED\nTrack Name: "Gardens"\nMusic By: LAKEY INSPIRED @   / lakeyinspired  \nOfficial "LAKEY INSPIRED" YouTube Channel HERE -    / @lakeyinspired  \nLicense for commercial use: Creative Commons Attribution 3.0 Unported "Share Alike" (CC BY-SA 3.0) License.\nFull License HERE - https://creativecommons.org/licenses/...\n\n#mousereview #endgamegear #op18k',
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/kSTs0CkExcE/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/kSTs0CkExcE/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/kSTs0CkExcE/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/kSTs0CkExcE/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/kSTs0CkExcE/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "Mausbert",
        playlistId: "UUGfagYvXoD_kt2g2UMxS5Xg",
        position: 3,
        resourceId: {
          kind: "youtube#video",
          videoId: "kSTs0CkExcE",
        },
        videoOwnerChannelTitle: "Mausbert",
        videoOwnerChannelId: "UCGfagYvXoD_kt2g2UMxS5Xg",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "v4pwoaYtQyG3FV45Vwnx9QMKyjw",
      id: "VVVHZmFnWXZYb0Rfa3QyZzJVTXhTNVhnLnNxNVBwRXg1bjh3",
      snippet: {
        publishedAt: "2024-11-13T22:13:59Z",
        channelId: "UCGfagYvXoD_kt2g2UMxS5Xg",
        title:
          "EndGame Gear XM2 8K Dark Frost - A Month Later and a Full Review",
        description:
          'A 1 month full review of the EndGame Gear XM2 8K Dark Frost by Mausbert\n\nVideo Chapters\n0:00 Introduction\n0:10 Shape and Grip Type\n1:54 Clicks\n2:49 Sound Test\n3:03 Build Quality\n3:38 Final Thoughts\n4:05 Outro\n\nIf you enjoyed the video make sure to like and subscribe and leave a comment down below!\n► Music Credit: LAKEY INSPIRED\nTrack Name: "Blue Boi"\nMusic By: LAKEY INSPIRED @   / lakeyinspired  \nOriginal upload HERE -    • LAKEY INSPIRED - Blue Boi  \nOfficial "LAKEY INSPIRED" YouTube Channel HERE -    / @lakeyinspired  \nLicense for commercial use: Creative Commons Attribution 3.0 Unported "Share Alike" (CC BY-SA 3.0) License.\nFull License HERE - https://creativecommons.org/licenses/...\nMusic promoted by NCM https://goo.gl/fh3rEJ \n\n#mousereview #endgamegear #xm2 #xm2darkfrost',
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/sq5PpEx5n8w/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/sq5PpEx5n8w/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/sq5PpEx5n8w/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/sq5PpEx5n8w/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/sq5PpEx5n8w/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "Mausbert",
        playlistId: "UUGfagYvXoD_kt2g2UMxS5Xg",
        position: 4,
        resourceId: {
          kind: "youtube#video",
          videoId: "sq5PpEx5n8w",
        },
        videoOwnerChannelTitle: "Mausbert",
        videoOwnerChannelId: "UCGfagYvXoD_kt2g2UMxS5Xg",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "Hui-xcd1I3cH1aDWuXFN-xUupYg",
      id: "VVVHZmFnWXZYb0Rfa3QyZzJVTXhTNVhnLk1OcVRJS1FORW13",
      snippet: {
        publishedAt: "2024-11-08T01:21:17Z",
        channelId: "UCGfagYvXoD_kt2g2UMxS5Xg",
        title: "Wired Mice Are Back - EndGame Gear OP1 8K Review",
        description:
          'Review of the EndGame Gear OP1 8K by Mausbert\n\nIf you enjoyed the video make sure to like and subscribe and comment down below!\n\n\n► Music Credit: LAKEY INSPIRED\nTrack Name: "Blue Boi"\nMusic By: LAKEY INSPIRED @   / lakeyinspired  \nOriginal upload HERE -    • LAKEY INSPIRED - Blue Boi  \nOfficial "LAKEY INSPIRED" YouTube Channel HERE -    / @lakeyinspired  \nLicense for commercial use: Creative Commons Attribution 3.0 Unported "Share Alike" (CC BY-SA 3.0) License.\nFull License HERE - https://creativecommons.org/licenses/...\nMusic promoted by NCM https://goo.gl/fh3rEJ \n\nChapters:\n0:00 Introduction\n0:10 Testing Setup\n0:25 Adjusting Mouse\n0:39 Price\n0:56 Internal Technical Specification\n1:13 Weight \n1:25 Build Quality\n1:42 Mouse Skates\n2:01 Mouse Click Quality\n2:30 Shape and Mouse Grip\n3:09 Mouse Click Modularity\n3:26 Drawbacks\n3:46 Conclusion\n\n#mousereview #endgamegear #op18k',
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/MNqTIKQNEmw/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/MNqTIKQNEmw/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/MNqTIKQNEmw/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/MNqTIKQNEmw/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/MNqTIKQNEmw/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "Mausbert",
        playlistId: "UUGfagYvXoD_kt2g2UMxS5Xg",
        position: 5,
        resourceId: {
          kind: "youtube#video",
          videoId: "MNqTIKQNEmw",
        },
        videoOwnerChannelTitle: "Mausbert",
        videoOwnerChannelId: "UCGfagYvXoD_kt2g2UMxS5Xg",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "zKrJNhIeL41_M6wLCpjI0fn4yxQ",
      id: "VVVHZmFnWXZYb0Rfa3QyZzJVTXhTNVhnLnNqdFhSekVsa2ZJ",
      snippet: {
        publishedAt: "2024-11-01T17:33:45Z",
        channelId: "UCGfagYvXoD_kt2g2UMxS5Xg",
        title: "EndGame Gear OP1 8K Unboxing  #mousereview #endgamegear #op18k",
        description:
          '@themausbert \n\nFull review on the channel soon so be sure to like and subscribe!\n\n► Music Credit: LAKEY INSPIRED\nTrack Name: "Blue Boi"\nMusic By: LAKEY INSPIRED @   / lakeyinspired  \nOriginal upload HERE -    • LAKEY INSPIRED - Blue Boi  \nOfficial "LAKEY INSPIRED" YouTube Channel HERE -    / @lakeyinspired  \nLicense for commercial use: Creative Commons Attribution 3.0 Unported "Share Alike" (CC BY-SA 3.0) License.\nFull License HERE - https://creativecommons.org/licenses/...\nMusic promoted by NCM https://goo.gl/fh3rEJ',
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/sjtXRzElkfI/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/sjtXRzElkfI/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/sjtXRzElkfI/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/sjtXRzElkfI/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/sjtXRzElkfI/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "Mausbert",
        playlistId: "UUGfagYvXoD_kt2g2UMxS5Xg",
        position: 6,
        resourceId: {
          kind: "youtube#video",
          videoId: "sjtXRzElkfI",
        },
        videoOwnerChannelTitle: "Mausbert",
        videoOwnerChannelId: "UCGfagYvXoD_kt2g2UMxS5Xg",
      },
    },
    {
      kind: "youtube#playlistItem",
      etag: "hAb3Nhq66XtYk9p2ES0TPD46Tvk",
      id: "VVVHZmFnWXZYb0Rfa3QyZzJVTXhTNVhnLmdfZmxiTFRRQ2k0",
      snippet: {
        publishedAt: "2024-10-17T05:18:26Z",
        channelId: "UCGfagYvXoD_kt2g2UMxS5Xg",
        title:
          "Is The EndGame Gear XM2 8K Worth Buying?   #mousereview #endgamegear #xm2",
        description:
          '@themausbert  \n\nFull Video: EndGame Gear XM2 8K Dark Frost - Unboxing & Review\n\nhttps://www.youtube.com/watch?v=FbmSoNbJW6g\n\n► Music Credit: LAKEY INSPIRED\nTrack Name: "Made For This"\nMusic By: LAKEY INSPIRED @   / lakeyinspired  \nOriginal upload HERE -    • Video  \nOfficial "LAKEY INSPIRED" YouTube Channel HERE -    / @lakeyinspired  \nLicense for commercial use: Creative Commons Attribution 3.0 Unported "Share Alike" (CC BY-SA 3.0) License.\nFull License HERE - https://creativecommons.org/licenses/...\nMusic promoted by NCM https://goo.gl/fh3rEJ',
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/g_flbLTQCi4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/g_flbLTQCi4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/g_flbLTQCi4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/g_flbLTQCi4/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/g_flbLTQCi4/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "Mausbert",
        playlistId: "UUGfagYvXoD_kt2g2UMxS5Xg",
        position: 7,
        resourceId: {
          kind: "youtube#video",
          videoId: "g_flbLTQCi4",
        },
        videoOwnerChannelTitle: "Mausbert",
        videoOwnerChannelId: "UCGfagYvXoD_kt2g2UMxS5Xg",
      },
    },
  ],
  pageInfo: {
    totalResults: 10,
    resultsPerPage: 8,
  },
};

export const userTestData = [
  {
    name: TEST_ADMIN_NAME,
    email: TEST_ADMIN_EMAIL,
    password: hashSync(TEST_ADMIN_PASSWORD, 10),
    role: TEST_ADMIN_ROLE,
  },
  {
    name: TEST_USER_NAME,
    email: TEST_USER_EMAIL,
    password: hashSync(TEST_USER_PASSWORD, 10),
    role: TEST_USER_ROLE,
  },
];

export const mouseTestData = [
  { name: "Maya X", company: "Lamzu", rank: 2, slug: "lamzu-maya-x" },
  {
    name: "XM2 8K",
    company: "EndGame Gear",
    rank: 3,
    slug: "endgamegear-xm2-8k",
  },
  {
    name: "OP1 8K",
    company: "EndGame Gear",
    rank: 1,
    slug: "endgamegear-op1-8k",
  },
  {
    name: "DeathAdder V3 Pro",
    company: "Razer",
    rank: 5,
    slug: "razer-deathadder-v3-pro",
  },
  { name: "X2H", company: "Pulsar", rank: 4, slug: "pulsar-x2h" },
  {
    name: "Viper Mini",
    company: "Razer",
    rank: 6,
    slug: "razer-viper-mini",
  },
];
