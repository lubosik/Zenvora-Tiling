/**
 * Product categories (Collections) data model
 * 6 tile categories with optional showcase items per category.
 */

export interface ShowcaseItem {
  id: string
  image: string
  imageAlt: string
  specs: string
  /** Optional short description shown under each project. */
  description?: string
}

export interface ProductCategory {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  ctaText: string
  image?: string
  showcaseItems: ShowcaseItem[]
}

export const productCategories: ProductCategory[] = [
  {
    id: 'ceramic-body-floor-tiles',
    name: 'Ceramic Body Floor Tiles',
    slug: 'ceramic-body-floor-tiles',
    description: 'Ceramic body floor tiles for commercial and residential applications.',
    shortDescription: 'Ceramic body floor tiles for diverse applications',
    ctaText: 'Request Pricing',
    image: '/collections/ceramic-body-floor-tiles/cover.jpg',
    showcaseItems: [
      {
        id: 'cb-1',
        image: '/collections/ceramic-body-floor-tiles/showcase-1.jpg',
        imageAlt: 'Glossy white marble-look floor tiles in a formal living room with gold and grey veining',
        specs: 'Glossy Surface, Digital Printing, Suitable For Wall & Floor, HD Tiles, Rectified',
        description:
          'Large-format glossy white floor tiles with gold and grey veining in a classic-modern living room. Minimal grout lines and a polished finish reflect light and suit high-end residential or commercial spaces.',
      },
      {
        id: 'cb-2',
        image: '/collections/ceramic-body-floor-tiles/showcase-2.jpg',
        imageAlt: 'Glossy black floor tiles with white and silver swirling pattern in a commercial lobby',
        specs: 'Glossy Surface, Digital Printing, Suitable For Wall & Floor, HD Tiles, Rectified',
        description:
          'High-gloss black tiles with bold white and silver-grey swirling patterns in a mall or lobby. The continuous design across large panels creates a strong, eye-catching floor for busy commercial settings.',
      },
      {
        id: 'cb-3',
        image: '/collections/ceramic-body-floor-tiles/showcase-3.jpg',
        imageAlt: 'Large porcelain tiles with 3D cube illusion pattern in white, dark and light grey marble looks',
        specs: 'Glossy Surface, Digital Printing, Suitable For Wall & Floor, HD Tiles, Rectified',
        description:
          'Large-format tiles in a 3D optical illusion layout: interlocking cube faces in bright white, dark grey marble with white veining, and lighter grey marble. A striking floor for modern showrooms and open-plan spaces.',
      },
    ],
  },
  {
    id: 'double-digital-floor-tiles',
    name: 'Double Digital Floor Tiles',
    slug: 'double-digital-floor-tiles',
    description: 'Double digital print floor tiles with high-definition patterns.',
    shortDescription: 'Double digital print floor tiles',
    ctaText: 'Request Pricing',
    image: '/collections/double-digital-floor-tiles/cover.jpg',
    showcaseItems: [
      {
        id: 'dd-1',
        image: '/collections/double-digital-floor-tiles/showcase-1.jpg',
        imageAlt: 'Living room with botanical leaf-pattern wall tiles and light grey marble-look floor tiles',
        specs: '600×600 mm | Matte Finish | Marble Effect',
        description:
          'Accent wall in large-format tiles with a botanical leaf pattern in muted greens, greys and browns. Paired with light grey floor tiles with subtle stone veining. Suits living rooms and contemporary interiors.',
      },
      {
        id: 'dd-2',
        image: '/collections/double-digital-floor-tiles/showcase-2.jpg',
        imageAlt: 'Hotel reception counter and feature wall in white marble-look porcelain slabs',
        specs: '800×800 mm | Polished | Stone Look',
        description:
          'Long reception counter and full-height feature wall in white porcelain with grey, brown and golden ochre veining. Large slabs with minimal grout lines. Ideal for hotel lobbies and corporate receptions.',
      },
      {
        id: 'dd-3',
        image: '/collections/double-digital-floor-tiles/showcase-3.jpg',
        imageAlt: 'Reception desk front in cream and gold-veined porcelain slabs',
        specs: '600×1200 mm | Satin | Wood Effect',
        description:
          'Reception desk clad in large cream and off-white slabs with gold, amber and grey-silver veining. Dark countertop and warm wood panels behind. A clear fit for upscale reception and lobby areas.',
      },
    ],
  },
  {
    id: 'full-body-tiles',
    name: 'Full Body Tiles',
    slug: 'full-body-tiles',
    description: 'Full-body porcelain tiles with consistent colour and pattern throughout.',
    shortDescription: 'Full-body porcelain with consistent colour throughout',
    ctaText: 'Request Pricing',
    image: '/collections/full-body-tiles/cover.png',
    showcaseItems: [
      {
        id: 'fb-1',
        image: '/collections/full-body-tiles/showcase-1.jpg',
        imageAlt: 'Light grey large-format tiles on patio, exterior wall and interior floor with sliding door',
        specs: 'KingStone Series | Through-Body Colour | Commercial Grade',
        description:
          'Same light grey tiles on the patio floor, exterior wall and interior floor for a continuous indoor-outdoor look. Subtle white veining and minimal grout lines. Full-body porcelain keeps the finish consistent at edges and in wet areas.',
      },
      {
        id: 'fb-2',
        image: '/collections/full-body-tiles/showcase-2.jpg',
        imageAlt: 'Bathroom with cream stone-look tiles on floor and walls and rose-pink shower accent',
        specs: 'KingStone Series | Natural Finish | Slip-Resistant',
        description:
          'Large cream and beige tiles with soft veining on the floor and behind the tub. Muted rose-pink tiles in the walk-in shower. Through-body colour stays consistent on walls and wet zones.',
      },
      {
        id: 'fb-3',
        image: '/collections/full-body-tiles/showcase-3.jpg',
        imageAlt: 'Spa-style bathroom with grey-beige stone-look tiles on floor and walls',
        specs: 'KingStone Series | Structured Surface | Anti-Slip',
        description:
          'Light grey-beige tiles with delicate veining on floor and walls in a spa-like bathroom. Wooden vanity, rain shower and greenery view. Seamless, easy-to-maintain look suited to residential and hospitality.',
      },
    ],
  },
  {
    id: 'glazed-vitrified-porcelain-floor-tiles',
    name: 'Glazed Vitrified Porcelain Floor Tiles',
    slug: 'glazed-vitrified-porcelain-floor-tiles',
    description: 'Glazed vitrified porcelain floor tiles for high-traffic commercial use.',
    shortDescription: 'Glazed vitrified porcelain for high-traffic areas',
    ctaText: 'Request Pricing',
    image: '/collections/glazed-vitrified-porcelain-floor-tiles/cover.jpg',
    showcaseItems: [
      {
        id: 'gv-1',
        image: '/collections/glazed-vitrified-porcelain-floor-tiles/showcase-1.jpg',
        imageAlt: 'Dark charcoal tiles with white veining on floor and accent wall with city view',
        specs: '1200×1800 mm & 600×1200 mm | Pannoni E-Catalogue',
        description:
          'Dark grey or charcoal large-format tiles with bold white veining on the floor and a full accent wall. Polished finish, city skyline and pool visible. Suits lounges and high-end residential or commercial interiors.',
      },
      {
        id: 'gv-2',
        image: '/collections/glazed-vitrified-porcelain-floor-tiles/showcase-2.jpg',
        imageAlt: 'Light grey marble-look tiles on floor and walls in a meeting or dining room',
        specs: '1200×1800 mm & 600×1200 mm | Pannoni E-Catalogue',
        description:
          'Light grey tiles with subtle white veining on the floor and walls. Marble-top table, credenza and wooden slat partition. Clean, minimal look for meeting rooms, offices and dining areas.',
      },
      {
        id: 'gv-3',
        image: '/collections/glazed-vitrified-porcelain-floor-tiles/showcase-3.jpg',
        imageAlt: 'Grey marble-look tiles on floor and walls in a hotel lobby with reception',
        specs: '1200×1800 mm & 600×1200 mm | Pannoni E-Catalogue',
        description:
          'Grey tiles with flowing white veining on the floor and walls in a bright lobby. Round columns, reception desk and seating. Polished or semi-polished finish for hotels and corporate spaces.',
      },
    ],
  },
  {
    id: 'large-porcelain-slab-tiles',
    name: 'Large Porcelain Slab Tiles',
    slug: 'large-porcelain-slab-tiles',
    description: 'Large-format porcelain slabs for seamless commercial installations.',
    shortDescription: 'Large-format slabs for seamless installations',
    ctaText: 'Request Pricing',
    image: '/collections/large-porcelain-slab-tiles/cover.jpg',
    showcaseItems: [
      {
        id: 'lp-1',
        image: '/collections/large-porcelain-slab-tiles/showcase-1.jpg',
        imageAlt: 'Large polished marble-look porcelain slabs in an open-plan living space',
        specs: 'Large format slabs | Polished | Marble look',
        description:
          'Polished white slabs with subtle grey and beige veining in a bright, open-plan living area. Minimal grout lines for a near-seamless floor that reflects light and suits modern interiors.',
      },
      {
        id: 'lp-2',
        image: '/collections/large-porcelain-slab-tiles/showcase-2.jpg',
        imageAlt: 'Large porcelain slab floor and textured wall tiles in a bedroom',
        specs: 'Large format slabs | Polished floor, textured walls',
        description:
          'White polished marble-look slabs on the floor with grey and golden-brown veining. Walls in light grey textured tiles for a calm, modern bedroom. Shows how slabs work with other tile finishes in one space.',
      },
      {
        id: 'lp-3',
        image: '/collections/large-porcelain-slab-tiles/showcase-3.jpg',
        imageAlt: 'Large porcelain slab walls and reception desk in a hotel lobby',
        specs: 'Large format slabs | Walls and feature surfaces',
        description:
          'White slabs with brown, gold and dark grey veining used on full-height walls and a dark marble-look reception desk. Ideal for lobbies, receptions and commercial spaces where a seamless, high-end look is needed.',
      },
    ],
  },
  {
    id: 'wall-tiles',
    name: 'Wall Tiles',
    slug: 'wall-tiles',
    description: 'Premium wall tiles for commercial and residential interiors.',
    shortDescription: 'Premium wall tiles for interiors',
    ctaText: 'Request Pricing',
    image: '/collections/wall-tiles/cover.jpg',
    showcaseItems: [
      {
        id: 'wt-1',
        image: '/collections/wall-tiles/showcase-1.jpg',
        imageAlt: '30x60cm Slate Series wall tiles in a living room behind a media console',
        specs: '30×60 cm | Slate Series',
        description:
          'Slate-effect wall tiles in a horizontal brick layout. Deep greys with rust, terracotta and golden-brown patches and pale beige striations. Natural, mottled look behind a white console and lamp. Ideal for feature walls in living and dining spaces.',
      },
      {
        id: 'wt-2',
        image: '/collections/wall-tiles/showcase-2.jpg',
        imageAlt: '30x60cm Slate Series light stone-look tiles in a reception or office',
        specs: '30×60 cm | Slate Series',
        description:
          'Light beige and off-white tiles with soft brownish-tan veining in a reception setting. Horizontal 30×60 cm format with thin grout lines. Clean, professional backdrop for desks and seating. Suits offices, lobbies and commercial interiors.',
      },
      {
        id: 'wt-3',
        image: '/collections/wall-tiles/showcase-3.jpg',
        imageAlt: '30x60cm Slate Series tiles on an exterior building entrance',
        specs: '30×60 cm | Slate Series',
        description:
          'Rugged slate-look tiles on an entrance facade. Dark blue-grey, rust-orange and sandy beige in a horizontal brick pattern. Works indoors and out: entrances, porches and statement walls. Part of our 30×60 cm Slate Series.',
      },
    ],
  },
]

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return productCategories.find((category) => category.slug === slug)
}

export function getAllCategorySlugs(): string[] {
  return productCategories.map((category) => category.slug)
}
