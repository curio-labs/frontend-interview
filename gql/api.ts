import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Timezone: any;
  Variant: any;
  Void: any;
};

export type Answer = {
  __typename?: 'Answer';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Audio = {
  __typename?: 'Audio';
  duration: Scalars['Int'];
  hlsUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mp3Url?: Maybe<Scalars['String']>;
};

export type Author = {
  __typename?: 'Author';
  name: Scalars['String'];
};

export type Bookmark = {
  __typename?: 'Bookmark';
  item: BookmarkItem;
  itemId: Scalars['String'];
  itemType: BookmarkItemType;
  updatedAt: Scalars['DateTime'];
};

export type BookmarkItem = Playlist | Show | Story;

export enum BookmarkItemType {
  Collection = 'COLLECTION',
  Story = 'STORY'
}

export type BookmarkItemUpdate = {
  __typename?: 'BookmarkItemUpdate';
  at: Scalars['DateTime'];
  itemId: Scalars['ID'];
  itemType: BookmarkItemType;
  type: BookmarkItemUpdateType;
};

export type BookmarkItemUpdateInput = {
  at: Scalars['DateTime'];
  itemId: Scalars['ID'];
  itemType: BookmarkItemType;
  recommendationId?: InputMaybe<Scalars['String']>;
  type: BookmarkItemUpdateType;
};

export enum BookmarkItemUpdateType {
  Add = 'ADD',
  Remove = 'REMOVE'
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type CarouselItem = {
  __typename?: 'CarouselItem';
  id: Scalars['ID'];
  items: Array<CarouselableItem>;
  layout: CarouselItemLayout;
  name: Scalars['String'];
  recommendationId?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  viewMore?: Maybe<Link>;
};

export enum CarouselItemLayout {
  Grid = 'GRID',
  RankedGrid = 'RANKED_GRID',
  Row = 'ROW',
  SmallRow = 'SMALL_ROW',
  SquareRow = 'SQUARE_ROW'
}

export type CarouselUpsell = {
  __typename?: 'CarouselUpsell';
  buttonCopy: Scalars['String'];
  buttonUri: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUris: Array<Scalars['String']>;
  name: Scalars['String'];
  title: Scalars['String'];
};

export type CarouselableItem = CarouselUpsell | Playlist | PromotedStory | Publication | Show | Story | Thinker;

export type Category = {
  __typename?: 'Category';
  children?: Maybe<Array<Category>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  parent?: Maybe<Category>;
  parentId?: Maybe<Scalars['String']>;
  storyCategories?: Maybe<Array<StoryCategory>>;
};


export type CategoryStoryCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Collection = Playlist | Show;

export type CollectionLink = {
  __typename?: 'CollectionLink';
  text: Scalars['String'];
  url: Scalars['String'];
};

export enum CollectionType {
  Playlist = 'PLAYLIST',
  Show = 'SHOW'
}

export type Concept = {
  __typename?: 'Concept';
  dbpediaUrl?: Maybe<Scalars['String']>;
  name: Scalars['ID'];
  storyConcepts?: Maybe<Array<StoryConcept>>;
};


export type ConceptStoryConceptsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type CreateTopicInput = {
  conceptName?: InputMaybe<Scalars['String']>;
  entityId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  storyIds: Array<Scalars['String']>;
};

export type DynamicTopic = {
  __typename?: 'DynamicTopic';
  id: Scalars['ID'];
};

export type Emotion = {
  __typename?: 'Emotion';
  id: Scalars['String'];
  storyEmotions?: Maybe<Array<StoryEmotion>>;
};

export type Entity = {
  __typename?: 'Entity';
  dbpediaUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  storyEntities?: Maybe<Array<StoryEntity>>;
  subtypes: Array<Scalars['String']>;
  type: Scalars['String'];
};


export type EntityStoryEntitiesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type HistoryItem = {
  __typename?: 'HistoryItem';
  progress?: Maybe<Scalars['Float']>;
  story?: Maybe<Story>;
};

export type Image = {
  __typename?: 'Image';
  description?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type Interstitial = {
  __typename?: 'Interstitial';
  action: InterstitialActionType;
  audioUrl: Scalars['String'];
  item: InterstitialItem;
  rules: Array<InterstitialRule>;
  text: Scalars['String'];
};

export enum InterstitialActionType {
  Follow = 'FOLLOW'
}

export type InterstitialItem = Playlist | Publication | Show | Story | Thinker;

export type InterstitialRule = InterstitialRuleCount | InterstitialRuleFollows;

export type InterstitialRuleCount = {
  __typename?: 'InterstitialRuleCount';
  maxTotal: Scalars['Int'];
};

export type InterstitialRuleFollows = {
  __typename?: 'InterstitialRuleFollows';
  notIds: Array<Maybe<Scalars['ID']>>;
};

export type Keyword = {
  __typename?: 'Keyword';
  storyKeywords?: Maybe<Array<StoryKeyword>>;
  text: Scalars['ID'];
};


export type KeywordStoryKeywordsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Link = {
  __typename?: 'Link';
  label?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type ListeningStats = {
  __typename?: 'ListeningStats';
  daysInRow: Scalars['Int'];
  totalCompletedToday: Scalars['Int'];
  totalProviders: Scalars['Int'];
  totalSeconds: Scalars['Int'];
  totalStories: Scalars['Int'];
};

export type Media = {
  __typename?: 'Media';
  duration: Scalars['Int'];
  hlsUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mp3Url?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createShortUrl: Scalars['String'];
  createShortUrlForUser: Scalars['String'];
  createTopic: Scalars['ID'];
  pushBookmarkItemUpdates: Array<Maybe<BookmarkItemUpdate>>;
  pushQueueItemUpdates: Array<Maybe<QueueItemUpdate>>;
  resolveShortUrl: ShortUrlResolution;
  setTopicStories: Scalars['ID'];
  startTakeALook?: Maybe<Scalars['Void']>;
  submitAnswers?: Maybe<Scalars['Void']>;
  subscribeUser?: Maybe<Scalars['Void']>;
  subscribeWithToken?: Maybe<Scalars['Void']>;
  trackUserAction?: Maybe<Scalars['Void']>;
  updateStoryPosition: Scalars['ID'];
  updateUser?: Maybe<Scalars['Void']>;
};


export type MutationCreateShortUrlArgs = {
  url: Scalars['String'];
};


export type MutationCreateShortUrlForUserArgs = {
  url: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationCreateTopicArgs = {
  topic: CreateTopicInput;
};


export type MutationPushBookmarkItemUpdatesArgs = {
  from?: InputMaybe<Scalars['DateTime']>;
  updates: Array<InputMaybe<BookmarkItemUpdateInput>>;
};


export type MutationPushQueueItemUpdatesArgs = {
  from?: InputMaybe<Scalars['DateTime']>;
  updates: Array<InputMaybe<QueueItemUpdateInput>>;
};


export type MutationResolveShortUrlArgs = {
  id: Scalars['String'];
  referralId: Scalars['String'];
};


export type MutationSetTopicStoriesArgs = {
  add: Array<Scalars['ID']>;
  delete: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationSubmitAnswersArgs = {
  answers: Array<SurveyAnswerSubmission>;
};


export type MutationSubscribeUserArgs = {
  referralId?: InputMaybe<Scalars['String']>;
};


export type MutationSubscribeWithTokenArgs = {
  timezone: Scalars['Timezone'];
  token: Scalars['String'];
};


export type MutationTrackUserActionArgs = {
  action: UserActionType;
  platform?: InputMaybe<PlatformType>;
  referralId: Scalars['String'];
};


export type MutationUpdateStoryPositionArgs = {
  position: Scalars['Float'];
  recommendationId?: InputMaybe<Scalars['String']>;
  storyId: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  user?: InputMaybe<UpdateUserInput>;
};

export type NlpItemStats = {
  __typename?: 'NLPItemStats';
  id: Scalars['ID'];
  nStories: Scalars['Int'];
  nStoriesLastMonth: Scalars['Int'];
  relevance: Scalars['Float'];
  type?: Maybe<NlpItemType>;
};

export enum NlpItemType {
  Concept = 'CONCEPT',
  Entity = 'ENTITY',
  Keyword = 'KEYWORD'
}

export type Narrator = {
  __typename?: 'Narrator';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export enum PlatformType {
  Android = 'ANDROID',
  Ios = 'IOS',
  Web = 'WEB'
}

export type Playlist = {
  __typename?: 'Playlist';
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  listed?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  shareImageUrl?: Maybe<Scalars['String']>;
  stories: Array<Story>;
  title: Scalars['String'];
  type: CollectionType;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PreviewableStory = {
  __typename?: 'PreviewableStory';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PromotedStory = {
  __typename?: 'PromotedStory';
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  quote: Scalars['String'];
  story: Story;
};

export type Provider = Publication | Thinker;

export type ProviderSeries = {
  __typename?: 'ProviderSeries';
  description?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export enum ProviderType {
  Publication = 'PUBLICATION',
  Thinker = 'THINKER'
}

export type Publication = {
  __typename?: 'Publication';
  description: Scalars['String'];
  hidden?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
  storyAddendum?: Maybe<Scalars['String']>;
  type: ProviderType;
  wordImageUrl?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  bookmarkItemUpdates: Array<Maybe<BookmarkItemUpdate>>;
  bookmarkItems: Array<Maybe<Bookmark>>;
  bookmarks?: Maybe<Array<Maybe<Story>>>;
  carousels?: Maybe<Array<Maybe<CarouselItem>>>;
  categories: Array<Category>;
  collection?: Maybe<Collection>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  concept: Concept;
  dynamicTopics: Array<DynamicTopic>;
  entity: Entity;
  history?: Maybe<Array<Maybe<HistoryItem>>>;
  interstitials: Array<Interstitial>;
  isSubscritionTokenValid?: Maybe<Scalars['Boolean']>;
  keyword: Keyword;
  listeningStats: ListeningStats;
  narrator?: Maybe<Narrator>;
  narrators?: Maybe<Array<Maybe<Narrator>>>;
  nlpItems: Array<NlpItemStats>;
  previewableStories: Array<PreviewableStory>;
  provider?: Maybe<Provider>;
  providers?: Maybe<Array<Maybe<Provider>>>;
  queueItemUpdates: Array<Maybe<QueueItemUpdate>>;
  queueItems: Array<Maybe<QueueItem>>;
  recommendations?: Maybe<Recommendations>;
  search?: Maybe<Array<Maybe<SearchResult>>>;
  stories: Array<Maybe<Story>>;
  story?: Maybe<Story>;
  storyPosition?: Maybe<StoryPosition>;
  storyPositions?: Maybe<Array<Maybe<StoryPosition>>>;
  streak: Streak;
  survey?: Maybe<Survey>;
  takeALookStatus: TakeALookStatus;
  test?: Maybe<Scalars['Boolean']>;
  topic?: Maybe<Topic>;
  topics?: Maybe<Array<Maybe<Topic>>>;
  user?: Maybe<User>;
  vibe?: Maybe<Vibe>;
  vibes?: Maybe<Array<Maybe<Vibe>>>;
};


export type QueryBookmarkItemUpdatesArgs = {
  from?: InputMaybe<Scalars['DateTime']>;
};


export type QueryCarouselsArgs = {
  firstRender?: InputMaybe<Scalars['Boolean']>;
  variants?: InputMaybe<Array<Scalars['Variant']>>;
};


export type QueryCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryCollectionArgs = {
  id: Scalars['ID'];
};


export type QueryCollectionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  types?: InputMaybe<Array<InputMaybe<CollectionType>>>;
};


export type QueryConceptArgs = {
  name: Scalars['ID'];
};


export type QueryDynamicTopicsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryEntityArgs = {
  id: Scalars['ID'];
};


export type QueryHistoryArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryIsSubscritionTokenValidArgs = {
  token: Scalars['String'];
};


export type QueryKeywordArgs = {
  text: Scalars['ID'];
};


export type QueryNarratorArgs = {
  id: Scalars['ID'];
};


export type QueryNarratorsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryNlpItemsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryProviderArgs = {
  id: Scalars['ID'];
};


export type QueryProvidersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  types?: InputMaybe<Array<InputMaybe<ProviderType>>>;
};


export type QueryQueueItemUpdatesArgs = {
  from?: InputMaybe<Scalars['DateTime']>;
};


export type QueryRecommendationsArgs = {
  scenario: Scalars['String'];
};


export type QuerySearchArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  q: Scalars['String'];
  sortBy?: InputMaybe<SearchSortBy>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QueryStoriesArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  includeHidden?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  providerId?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<StorySortBy>;
  sortOrder?: InputMaybe<SortOrder>;
};


export type QueryStoryArgs = {
  id: Scalars['ID'];
};


export type QueryStoryPositionArgs = {
  storyId: Scalars['String'];
};


export type QueryStoryPositionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QuerySurveyArgs = {
  code: Scalars['String'];
};


export type QueryTopicArgs = {
  id: Scalars['ID'];
};


export type QueryTopicsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryVibeArgs = {
  id: Scalars['ID'];
};


export type QueryVibesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Question = {
  __typename?: 'Question';
  answers: Array<Answer>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type QueueItem = {
  __typename?: 'QueueItem';
  position: Scalars['Int'];
  story: Story;
  storyId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type QueueItemUpdate = {
  __typename?: 'QueueItemUpdate';
  at: Scalars['DateTime'];
  position?: Maybe<Scalars['Int']>;
  storyId: Scalars['ID'];
  type: QueueItemUpdateType;
};

export type QueueItemUpdateInput = {
  at: Scalars['DateTime'];
  position?: InputMaybe<Scalars['Int']>;
  recommendationId?: InputMaybe<Scalars['String']>;
  storyId: Scalars['ID'];
  type: QueueItemUpdateType;
};

export enum QueueItemUpdateType {
  Set = 'SET',
  Unset = 'UNSET'
}

export type Recommendations = {
  __typename?: 'Recommendations';
  id: Scalars['ID'];
  stories: Array<Story>;
};

export enum Role {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER'
}

export type SearchResult = {
  __typename?: 'SearchResult';
  story: Story;
};

export enum SearchSortBy {
  PublishedAt = 'PUBLISHED_AT',
  Relevance = 'RELEVANCE'
}

export enum SentimentLabel {
  Negative = 'NEGATIVE',
  Positive = 'POSITIVE'
}

export type ShortUrlResolution = {
  __typename?: 'ShortUrlResolution';
  id: Scalars['String'];
  url: Scalars['String'];
};

export type Show = {
  __typename?: 'Show';
  description: Scalars['String'];
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  links: Array<Maybe<CollectionLink>>;
  listed?: Maybe<Scalars['Boolean']>;
  logoImageUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  posterImageUrl?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Int']>;
  shareImageUrl?: Maybe<Scalars['String']>;
  stories: Array<Story>;
  tagline?: Maybe<Scalars['String']>;
  theme: ShowTheme;
  title: Scalars['String'];
  type: CollectionType;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ShowLogoImageUrlArgs = {
  scale?: InputMaybe<Scalars['Int']>;
};


export type ShowPosterImageUrlArgs = {
  scale?: InputMaybe<Scalars['Int']>;
};

export type ShowTheme = {
  __typename?: 'ShowTheme';
  backgroundColor?: Maybe<Scalars['String']>;
  button?: Maybe<ThemeButton>;
  card: ThemeCard;
  navigation?: Maybe<ThemeNavigation>;
  primaryTextColor?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Story = {
  __typename?: 'Story';
  /** @deprecated No longer supported */
  articleUrl: Scalars['String'];
  articleUrlV2?: Maybe<Scalars['String']>;
  audio: Audio;
  author: Author;
  collections?: Maybe<Array<Collection>>;
  contentType: StoryContentType;
  description: Scalars['String'];
  id: Scalars['ID'];
  /** Link to the web article that the story comes from */
  imageUrl: Scalars['String'];
  /**
   * Time at which the story was last updated
   * @deprecated Was not using correct type
   */
  lastUpdateTime: Scalars['String'];
  manualCategories?: Maybe<Array<Maybe<StoryManualCategory>>>;
  media: Media;
  narrator: Narrator;
  narratorId: Scalars['String'];
  provider: Provider;
  providerId: Scalars['String'];
  /**
   * Time after which the story is live
   * @deprecated Was not using correct type
   */
  publishTime: Scalars['String'];
  /** Time after which the story is live */
  publishedAt: Scalars['DateTime'];
  script?: Maybe<StoryScript>;
  sentimentScore?: Maybe<Scalars['Float']>;
  storyCategories?: Maybe<Array<StoryCategory>>;
  storyConcepts?: Maybe<Array<StoryConcept>>;
  storyEmotions?: Maybe<Array<StoryEmotion>>;
  storyEntities?: Maybe<Array<StoryEntity>>;
  storyKeywords?: Maybe<Array<StoryKeyword>>;
  storyPositions?: Maybe<Array<StoryPosition>>;
  /** Time after which the story becomes less relevant, e.g. for short-lived news pieces */
  sunsetAt?: Maybe<Scalars['DateTime']>;
  /**
   * Time after which the story becomes less relevant, e.g. for short-lived news pieces
   * @deprecated Was not using correct type
   */
  sunsetTime?: Maybe<Scalars['String']>;
  thumbnailImageUrl: Scalars['String'];
  title: Scalars['String'];
  topics?: Maybe<Array<Topic>>;
  /** Time at which the story was last updated */
  updatedAt: Scalars['DateTime'];
  vibes?: Maybe<Array<Vibe>>;
};


export type StoryCollectionsArgs = {
  type?: InputMaybe<CollectionType>;
};

export type StoryCategory = {
  __typename?: 'StoryCategory';
  category: Category;
  categoryId: Scalars['String'];
  id: Scalars['ID'];
  score: Scalars['Float'];
  story: Story;
  storyId: Scalars['String'];
};

export type StoryConcept = {
  __typename?: 'StoryConcept';
  concept: Concept;
  conceptName: Scalars['String'];
  id: Scalars['ID'];
  relevance: Scalars['Float'];
  story: Story;
  storyId: Scalars['String'];
};

export enum StoryContentType {
  Article = 'ARTICLE',
  Episode = 'EPISODE',
  Trailer = 'TRAILER'
}

export type StoryEmotion = {
  __typename?: 'StoryEmotion';
  emotion: Emotion;
  emotionId: Scalars['String'];
  id: Scalars['ID'];
  score: Scalars['Float'];
  story: Story;
  storyId: Scalars['String'];
};

export type StoryEntity = {
  __typename?: 'StoryEntity';
  count: Scalars['Int'];
  entity: Entity;
  entityId: Scalars['String'];
  id: Scalars['ID'];
  relevance: Scalars['Float'];
  story: Story;
  storyId: Scalars['String'];
};

export type StoryKeyword = {
  __typename?: 'StoryKeyword';
  count: Scalars['Int'];
  id: Scalars['ID'];
  keyword: Keyword;
  keywordText: Scalars['String'];
  relevance: Scalars['Float'];
  story: Story;
  storyId: Scalars['String'];
};

export type StoryManualCategory = {
  __typename?: 'StoryManualCategory';
  iconImageUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type StoryPosition = {
  __typename?: 'StoryPosition';
  completed: Scalars['Boolean'];
  completedAt?: Maybe<Scalars['DateTime']>;
  position: Scalars['Float'];
  story?: Maybe<Story>;
  storyId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type StoryScript = {
  __typename?: 'StoryScript';
  annotatedText: Scalars['String'];
  sections?: Maybe<Array<StoryScriptSection>>;
  text: Scalars['String'];
};

export type StoryScriptSection = {
  __typename?: 'StoryScriptSection';
  text: Scalars['String'];
  type: StoryScriptSectionType;
};

export enum StoryScriptSectionType {
  Body = 'BODY',
  IntroCurio = 'INTRO_CURIO',
  IntroProvider = 'INTRO_PROVIDER',
  OutroCurio = 'OUTRO_CURIO',
  OutroProvider = 'OUTRO_PROVIDER',
  RestrictedBody = 'RESTRICTED_BODY'
}

export type StorySentiment = {
  __typename?: 'StorySentiment';
  id: Scalars['ID'];
  label: SentimentLabel;
  score: Scalars['Float'];
};

export enum StorySortBy {
  Popularity = 'POPULARITY',
  PublishedAt = 'PUBLISHED_AT'
}

export type Streak = {
  __typename?: 'Streak';
  completedToday: Scalars['Boolean'];
  count: Scalars['Int'];
};

export type Survey = {
  __typename?: 'Survey';
  code: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  questions: Array<Question>;
};

export type SurveyAnswerSubmission = {
  answerId: Scalars['ID'];
  questionId: Scalars['ID'];
};

export type TakeALookStatus = {
  __typename?: 'TakeALookStatus';
  daysSinceStart?: Maybe<Scalars['Int']>;
  finishesOn: Scalars['Date'];
  startedOn: Scalars['Date'];
};

export type ThemeButton = {
  __typename?: 'ThemeButton';
  backgroundColor?: Maybe<Scalars['String']>;
  tintColor?: Maybe<Scalars['String']>;
};

export type ThemeCard = {
  __typename?: 'ThemeCard';
  badge?: Maybe<ThemeCardBadge>;
  style: ThemeCardStyle;
};

export type ThemeCardBadge = {
  __typename?: 'ThemeCardBadge';
  backgroundColor?: Maybe<Scalars['String']>;
  tintColor?: Maybe<Scalars['String']>;
};

export enum ThemeCardStyle {
  Minimal = 'MINIMAL',
  Regular = 'REGULAR'
}

export type ThemeNavigation = {
  __typename?: 'ThemeNavigation';
  tintColor?: Maybe<Scalars['String']>;
};

export type Thinker = {
  __typename?: 'Thinker';
  description: Scalars['String'];
  hidden?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
  series: ThinkerSeries;
  slug: Scalars['String'];
  storyAddendum?: Maybe<Scalars['String']>;
  type: ProviderType;
  websiteUrl?: Maybe<Scalars['String']>;
  wordImageUrl?: Maybe<Scalars['String']>;
};

export type ThinkerSeries = {
  __typename?: 'ThinkerSeries';
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
};

export type Topic = {
  __typename?: 'Topic';
  icon: Image;
  iconImageUrl: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type UpdateUserInput = {
  timezone?: InputMaybe<Scalars['Timezone']>;
};

export type User = {
  __typename?: 'User';
  canShareShortUrl: Scalars['Boolean'];
  subscribedAt?: Maybe<Scalars['DateTime']>;
  timezone: Scalars['String'];
};

export enum UserActionType {
  OpenIos = 'OPEN_IOS',
  SignIn = 'SIGN_IN',
  SignUp = 'SIGN_UP',
  TakeALook = 'TAKE_A_LOOK'
}

export type UserAnswer = {
  __typename?: 'UserAnswer';
  answer: Scalars['ID'];
  id: Scalars['ID'];
};

export type Vibe = {
  __typename?: 'Vibe';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type SearchQueryVariables = Exact<{
  text: Scalars['String'];
}>;


export type SearchQuery = { __typename?: 'Query', search?: Array<{ __typename?: 'SearchResult', story: { __typename?: 'Story', id: string, title: string, description: string, imageUrl: string, thumbnailImageUrl: string, publishedAt: any, media: { __typename?: 'Media', duration: number, mp3Url?: string | null }, provider: { __typename?: 'Publication', name: string, imageUrl: string } | { __typename?: 'Thinker', name: string, imageUrl: string } } } | null> | null };


export const SearchDocument = gql`
    query Search($text: String!) {
  search(q: $text) {
    story {
      id
      title
      description
      imageUrl
      thumbnailImageUrl
      publishedAt
      media {
        duration
        mp3Url
      }
      provider {
        ... on Publication {
          name
          imageUrl
        }
        ... on Thinker {
          name
          imageUrl
        }
      }
    }
  }
}
    `;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      text: // value for 'text'
 *   },
 * });
 */
export function useSearchQuery(baseOptions: Apollo.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
      }
export function useSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = Apollo.QueryResult<SearchQuery, SearchQueryVariables>;