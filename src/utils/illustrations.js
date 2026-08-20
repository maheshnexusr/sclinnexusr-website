import {
  CaptureIllustration,
  CleanDataIllustration,
  ConsentIllustration,
  CoordinateIllustration,
  OperationsIllustration,
  OversightIllustration,
  RandomizeIllustration,
  ReviewIllustration,
  SiteVisitIllustration,
  SurveyIllustration,
} from '../assets/illustrations'

const illustrations = {
  capture: CaptureIllustration,
  coordinate: CoordinateIllustration,
  randomize: RandomizeIllustration,
  survey: SurveyIllustration,
  consent: ConsentIllustration,
  review: ReviewIllustration,
  oversight: OversightIllustration,
  operations: OperationsIllustration,
  siteVisit: SiteVisitIllustration,
  cleanData: CleanDataIllustration,
}

export function getIllustration(name) {
  return illustrations[name] ?? null
}
