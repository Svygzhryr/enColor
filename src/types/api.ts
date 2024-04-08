export interface IColorResponse {
  mode: string
  count: string
  colors: Color[]
  seed: Seed
  image: Image3
  _links: Links3
  _embedded: Embedded3
}

export interface Color {
  hex: Hex
  rgb: Rgb
  hsl: Hsl
  hsv: Hsv
  name: Name
  cmyk: Cmyk
  XYZ: Xyz
  image: Image
  contrast: Contrast
  _links: Links
  _embedded: Embedded
}

export interface Hex {
  value: string
  clean: string
}

export interface Rgb {
  fraction: Fraction
  r: number
  g: number
  b: number
  value: string
}

export interface Fraction {
  r: number
  g: number
  b: number
}

export interface Hsl {
  fraction: Fraction2
  h: number
  s: number
  l: number
  value: string
}

export interface Fraction2 {
  h: number
  s: number
  l: number
}

export interface Hsv {
  fraction: Fraction3
  value: string
  h: number
  s: number
  v: number
}

export interface Fraction3 {
  h: number
  s: number
  v: number
}

export interface Name {
  value: string
  closest_named_hex: string
  exact_match_name: boolean
  distance: number
}

export interface Cmyk {
  fraction: Fraction4
  value: string
  c: number
  m: number
  y: number
  k: number
}

export interface Fraction4 {
  c: number
  m: number
  y: number
  k: number
}

export interface Xyz {
  fraction: Fraction5
  value: string
  X: number
  Y: number
  Z: number
}

export interface Fraction5 {
  X: number
  Y: number
  Z: number
}

export interface Image {
  bare: string
  named: string
}

export interface Contrast {
  value: string
}

export interface Links {
  self: Self
}

export interface Self {
  href: string
}

export interface Embedded {}

export interface Seed {
  hex: Hex2
  rgb: Rgb2
  hsl: Hsl2
  hsv: Hsv2
  name: Name2
  cmyk: Cmyk2
  XYZ: Xyz2
  image: Image2
  contrast: Contrast2
  _links: Links2
  _embedded: Embedded2
}

export interface Hex2 {
  value: string
  clean: string
}

export interface Rgb2 {
  fraction: Fraction6
  r: number
  g: number
  b: number
  value: string
}

export interface Fraction6 {
  r: number
  g: number
  b: number
}

export interface Hsl2 {
  fraction: Fraction7
  h: number
  s: number
  l: number
  value: string
}

export interface Fraction7 {
  h: number
  s: number
  l: number
}

export interface Hsv2 {
  fraction: Fraction8
  value: string
  h: number
  s: number
  v: number
}

export interface Fraction8 {
  h: number
  s: number
  v: number
}

export interface Name2 {
  value: string
  closest_named_hex: string
  exact_match_name: boolean
  distance: number
}

export interface Cmyk2 {
  fraction: Fraction9
  value: string
  c: number
  m: number
  y: number
  k: number
}

export interface Fraction9 {
  c: number
  m: number
  y: number
  k: number
}

export interface Xyz2 {
  fraction: Fraction10
  value: string
  X: number
  Y: number
  Z: number
}

export interface Fraction10 {
  X: number
  Y: number
  Z: number
}

export interface Image2 {
  bare: string
  named: string
}

export interface Contrast2 {
  value: string
}

export interface Links2 {
  self: Self2
}

export interface Self2 {
  href: string
}

export interface Embedded2 {}

export interface Image3 {
  bare: string
  named: string
}

export interface Links3 {
  self: string
  schemes: Schemes
}

export interface Schemes {
  monochrome: string
  'monochrome-dark': string
  'monochrome-light': string
  analogic: string
  complement: string
  'analogic-complement': string
  triad: string
  quad: string
}

export interface Embedded3 {}
