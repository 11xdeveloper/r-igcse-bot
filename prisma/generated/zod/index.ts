import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const GuildPreferencesScalarFieldEnumSchema = z.enum(['id','guildId','repEnabled','repDisabledChannelIds','hotmSessionOngoing','modlogChannelId','generalLogsChannelId','actionRequiredChannelId','welcomeChannelId','confessionsChannelId','confessionApprovalChannelId','hostSessionApprovalChannelId','countingChannelId','hotmResultsChannelId','hotmResultsEmbedId','hostSessionChannelId','archiveSessionCategoryId','modmailCreateChannelId','modmailThreadsChannelId','modmailLogsChannelId','closedDmChannelId','banAppealFormLink','moderatorRoleId','forcedMuteRoleId','welcomeChannelMessage','welcomeDMMessage','groupStudyChannelId','keywordRequestChannelId','tagResourceApprovalChannelId']);

export const ReputationScalarFieldEnumSchema = z.enum(['id','userId','rep','guildId']);

export const HOTMScalarFieldEnumSchema = z.enum(['id','helperId','guildId','votes']);

export const HOTMBlacklistScalarFieldEnumSchema = z.enum(['id','helperId','guildId','permanent']);

export const HOTMUserScalarFieldEnumSchema = z.enum(['id','userId','guildId','voted']);

export const PunishmentScalarFieldEnumSchema = z.enum(['id','actionAgainst','actionBy','when','guildId','caseId','reason','points','action','duration']);

export const StudyChannelScalarFieldEnumSchema = z.enum(['id','guildId','channelId','helperRoleId','studyPingRoleId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// GUILD PREFERENCES SCHEMA
/////////////////////////////////////////

export const GuildPreferencesSchema = z.object({
  id: z.string(),
  guildId: z.string(),
  repEnabled: z.boolean(),
  repDisabledChannelIds: z.string().array(),
  hotmSessionOngoing: z.boolean().nullable(),
  modlogChannelId: z.string().nullable(),
  generalLogsChannelId: z.string().nullable(),
  actionRequiredChannelId: z.string().nullable(),
  welcomeChannelId: z.string().nullable(),
  confessionsChannelId: z.string().nullable(),
  confessionApprovalChannelId: z.string().nullable(),
  hostSessionApprovalChannelId: z.string().nullable(),
  countingChannelId: z.string().nullable(),
  hotmResultsChannelId: z.string().nullable(),
  hotmResultsEmbedId: z.string().nullable(),
  hostSessionChannelId: z.string().nullable(),
  archiveSessionCategoryId: z.string().nullable(),
  modmailCreateChannelId: z.string().nullable(),
  modmailThreadsChannelId: z.string().nullable(),
  modmailLogsChannelId: z.string().nullable(),
  closedDmChannelId: z.string().nullable(),
  banAppealFormLink: z.string().nullable(),
  moderatorRoleId: z.string().nullable(),
  forcedMuteRoleId: z.string().nullable(),
  welcomeChannelMessage: z.string().nullable(),
  welcomeDMMessage: z.string().nullable(),
  groupStudyChannelId: z.string().nullable(),
  keywordRequestChannelId: z.string().nullable(),
  tagResourceApprovalChannelId: z.string().nullable(),
})

export type GuildPreferences = z.infer<typeof GuildPreferencesSchema>

/////////////////////////////////////////
// REPUTATION SCHEMA
/////////////////////////////////////////

export const ReputationSchema = z.object({
  id: z.string(),
  userId: z.string(),
  rep: z.number().int(),
  guildId: z.string(),
})

export type Reputation = z.infer<typeof ReputationSchema>

/////////////////////////////////////////
// HOTM SCHEMA
/////////////////////////////////////////

export const HOTMSchema = z.object({
  id: z.string(),
  helperId: z.string(),
  guildId: z.string(),
  votes: z.number().int(),
})

export type HOTM = z.infer<typeof HOTMSchema>

/////////////////////////////////////////
// HOTM BLACKLIST SCHEMA
/////////////////////////////////////////

export const HOTMBlacklistSchema = z.object({
  id: z.string(),
  helperId: z.string(),
  guildId: z.string(),
  permanent: z.boolean(),
})

export type HOTMBlacklist = z.infer<typeof HOTMBlacklistSchema>

/////////////////////////////////////////
// HOTM USER SCHEMA
/////////////////////////////////////////

export const HOTMUserSchema = z.object({
  id: z.string(),
  userId: z.string(),
  guildId: z.string(),
  voted: z.string().array(),
})

export type HOTMUser = z.infer<typeof HOTMUserSchema>

/////////////////////////////////////////
// PUNISHMENT SCHEMA
/////////////////////////////////////////

export const PunishmentSchema = z.object({
  id: z.string(),
  actionAgainst: z.string(),
  actionBy: z.string(),
  when: z.coerce.date(),
  guildId: z.string(),
  caseId: z.number().int(),
  reason: z.string().nullable(),
  points: z.number().int(),
  action: z.string(),
  duration: z.number().int().nullable(),
})

export type Punishment = z.infer<typeof PunishmentSchema>

/////////////////////////////////////////
// STUDY CHANNEL SCHEMA
/////////////////////////////////////////

export const StudyChannelSchema = z.object({
  id: z.string(),
  guildId: z.string(),
  channelId: z.string(),
  helperRoleId: z.string(),
  studyPingRoleId: z.string(),
})

export type StudyChannel = z.infer<typeof StudyChannelSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// GUILD PREFERENCES
//------------------------------------------------------

export const GuildPreferencesArgsSchema: z.ZodType<Prisma.GuildPreferencesDefaultArgs> = z.object({
  select: z.lazy(() => GuildPreferencesSelectSchema).optional(),
}).strict();

export const GuildPreferencesSelectSchema: z.ZodType<Prisma.GuildPreferencesSelect> = z.object({
  id: z.boolean().optional(),
  guildId: z.boolean().optional(),
  repEnabled: z.boolean().optional(),
  repDisabledChannelIds: z.boolean().optional(),
  hotmSessionOngoing: z.boolean().optional(),
  modlogChannelId: z.boolean().optional(),
  generalLogsChannelId: z.boolean().optional(),
  actionRequiredChannelId: z.boolean().optional(),
  welcomeChannelId: z.boolean().optional(),
  confessionsChannelId: z.boolean().optional(),
  confessionApprovalChannelId: z.boolean().optional(),
  hostSessionApprovalChannelId: z.boolean().optional(),
  countingChannelId: z.boolean().optional(),
  hotmResultsChannelId: z.boolean().optional(),
  hotmResultsEmbedId: z.boolean().optional(),
  hostSessionChannelId: z.boolean().optional(),
  archiveSessionCategoryId: z.boolean().optional(),
  modmailCreateChannelId: z.boolean().optional(),
  modmailThreadsChannelId: z.boolean().optional(),
  modmailLogsChannelId: z.boolean().optional(),
  closedDmChannelId: z.boolean().optional(),
  banAppealFormLink: z.boolean().optional(),
  moderatorRoleId: z.boolean().optional(),
  forcedMuteRoleId: z.boolean().optional(),
  welcomeChannelMessage: z.boolean().optional(),
  welcomeDMMessage: z.boolean().optional(),
  groupStudyChannelId: z.boolean().optional(),
  keywordRequestChannelId: z.boolean().optional(),
  tagResourceApprovalChannelId: z.boolean().optional(),
}).strict()

// REPUTATION
//------------------------------------------------------

export const ReputationArgsSchema: z.ZodType<Prisma.ReputationDefaultArgs> = z.object({
  select: z.lazy(() => ReputationSelectSchema).optional(),
}).strict();

export const ReputationSelectSchema: z.ZodType<Prisma.ReputationSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  rep: z.boolean().optional(),
  guildId: z.boolean().optional(),
}).strict()

// HOTM
//------------------------------------------------------

export const HOTMArgsSchema: z.ZodType<Prisma.HOTMDefaultArgs> = z.object({
  select: z.lazy(() => HOTMSelectSchema).optional(),
}).strict();

export const HOTMSelectSchema: z.ZodType<Prisma.HOTMSelect> = z.object({
  id: z.boolean().optional(),
  helperId: z.boolean().optional(),
  guildId: z.boolean().optional(),
  votes: z.boolean().optional(),
}).strict()

// HOTM BLACKLIST
//------------------------------------------------------

export const HOTMBlacklistArgsSchema: z.ZodType<Prisma.HOTMBlacklistDefaultArgs> = z.object({
  select: z.lazy(() => HOTMBlacklistSelectSchema).optional(),
}).strict();

export const HOTMBlacklistSelectSchema: z.ZodType<Prisma.HOTMBlacklistSelect> = z.object({
  id: z.boolean().optional(),
  helperId: z.boolean().optional(),
  guildId: z.boolean().optional(),
  permanent: z.boolean().optional(),
}).strict()

// HOTM USER
//------------------------------------------------------

export const HOTMUserArgsSchema: z.ZodType<Prisma.HOTMUserDefaultArgs> = z.object({
  select: z.lazy(() => HOTMUserSelectSchema).optional(),
}).strict();

export const HOTMUserSelectSchema: z.ZodType<Prisma.HOTMUserSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  guildId: z.boolean().optional(),
  voted: z.boolean().optional(),
}).strict()

// PUNISHMENT
//------------------------------------------------------

export const PunishmentArgsSchema: z.ZodType<Prisma.PunishmentDefaultArgs> = z.object({
  select: z.lazy(() => PunishmentSelectSchema).optional(),
}).strict();

export const PunishmentSelectSchema: z.ZodType<Prisma.PunishmentSelect> = z.object({
  id: z.boolean().optional(),
  actionAgainst: z.boolean().optional(),
  actionBy: z.boolean().optional(),
  when: z.boolean().optional(),
  guildId: z.boolean().optional(),
  caseId: z.boolean().optional(),
  reason: z.boolean().optional(),
  points: z.boolean().optional(),
  action: z.boolean().optional(),
  duration: z.boolean().optional(),
}).strict()

// STUDY CHANNEL
//------------------------------------------------------

export const StudyChannelArgsSchema: z.ZodType<Prisma.StudyChannelDefaultArgs> = z.object({
  select: z.lazy(() => StudyChannelSelectSchema).optional(),
}).strict();

export const StudyChannelSelectSchema: z.ZodType<Prisma.StudyChannelSelect> = z.object({
  id: z.boolean().optional(),
  guildId: z.boolean().optional(),
  channelId: z.boolean().optional(),
  helperRoleId: z.boolean().optional(),
  studyPingRoleId: z.boolean().optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const GuildPreferencesWhereInputSchema: z.ZodType<Prisma.GuildPreferencesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => GuildPreferencesWhereInputSchema),z.lazy(() => GuildPreferencesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GuildPreferencesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GuildPreferencesWhereInputSchema),z.lazy(() => GuildPreferencesWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  guildId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  repEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  repDisabledChannelIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  hotmSessionOngoing: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  modlogChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  generalLogsChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  actionRequiredChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  welcomeChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  confessionsChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  confessionApprovalChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hostSessionApprovalChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  countingChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hotmResultsChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hotmResultsEmbedId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hostSessionChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  archiveSessionCategoryId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  modmailCreateChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  modmailThreadsChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  modmailLogsChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  closedDmChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  banAppealFormLink: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  moderatorRoleId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  forcedMuteRoleId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  welcomeChannelMessage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  welcomeDMMessage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  groupStudyChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  keywordRequestChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tagResourceApprovalChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const GuildPreferencesOrderByWithRelationInputSchema: z.ZodType<Prisma.GuildPreferencesOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  repEnabled: z.lazy(() => SortOrderSchema).optional(),
  repDisabledChannelIds: z.lazy(() => SortOrderSchema).optional(),
  hotmSessionOngoing: z.lazy(() => SortOrderSchema).optional(),
  modlogChannelId: z.lazy(() => SortOrderSchema).optional(),
  generalLogsChannelId: z.lazy(() => SortOrderSchema).optional(),
  actionRequiredChannelId: z.lazy(() => SortOrderSchema).optional(),
  welcomeChannelId: z.lazy(() => SortOrderSchema).optional(),
  confessionsChannelId: z.lazy(() => SortOrderSchema).optional(),
  confessionApprovalChannelId: z.lazy(() => SortOrderSchema).optional(),
  hostSessionApprovalChannelId: z.lazy(() => SortOrderSchema).optional(),
  countingChannelId: z.lazy(() => SortOrderSchema).optional(),
  hotmResultsChannelId: z.lazy(() => SortOrderSchema).optional(),
  hotmResultsEmbedId: z.lazy(() => SortOrderSchema).optional(),
  hostSessionChannelId: z.lazy(() => SortOrderSchema).optional(),
  archiveSessionCategoryId: z.lazy(() => SortOrderSchema).optional(),
  modmailCreateChannelId: z.lazy(() => SortOrderSchema).optional(),
  modmailThreadsChannelId: z.lazy(() => SortOrderSchema).optional(),
  modmailLogsChannelId: z.lazy(() => SortOrderSchema).optional(),
  closedDmChannelId: z.lazy(() => SortOrderSchema).optional(),
  banAppealFormLink: z.lazy(() => SortOrderSchema).optional(),
  moderatorRoleId: z.lazy(() => SortOrderSchema).optional(),
  forcedMuteRoleId: z.lazy(() => SortOrderSchema).optional(),
  welcomeChannelMessage: z.lazy(() => SortOrderSchema).optional(),
  welcomeDMMessage: z.lazy(() => SortOrderSchema).optional(),
  groupStudyChannelId: z.lazy(() => SortOrderSchema).optional(),
  keywordRequestChannelId: z.lazy(() => SortOrderSchema).optional(),
  tagResourceApprovalChannelId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GuildPreferencesWhereUniqueInputSchema: z.ZodType<Prisma.GuildPreferencesWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    guildId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    guildId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  guildId: z.string().optional(),
  AND: z.union([ z.lazy(() => GuildPreferencesWhereInputSchema),z.lazy(() => GuildPreferencesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => GuildPreferencesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GuildPreferencesWhereInputSchema),z.lazy(() => GuildPreferencesWhereInputSchema).array() ]).optional(),
  repEnabled: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  repDisabledChannelIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  hotmSessionOngoing: z.union([ z.lazy(() => BoolNullableFilterSchema),z.boolean() ]).optional().nullable(),
  modlogChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  generalLogsChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  actionRequiredChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  welcomeChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  confessionsChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  confessionApprovalChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hostSessionApprovalChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  countingChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hotmResultsChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hotmResultsEmbedId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  hostSessionChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  archiveSessionCategoryId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  modmailCreateChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  modmailThreadsChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  modmailLogsChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  closedDmChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  banAppealFormLink: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  moderatorRoleId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  forcedMuteRoleId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  welcomeChannelMessage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  welcomeDMMessage: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  groupStudyChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  keywordRequestChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  tagResourceApprovalChannelId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export const GuildPreferencesOrderByWithAggregationInputSchema: z.ZodType<Prisma.GuildPreferencesOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  repEnabled: z.lazy(() => SortOrderSchema).optional(),
  repDisabledChannelIds: z.lazy(() => SortOrderSchema).optional(),
  hotmSessionOngoing: z.lazy(() => SortOrderSchema).optional(),
  modlogChannelId: z.lazy(() => SortOrderSchema).optional(),
  generalLogsChannelId: z.lazy(() => SortOrderSchema).optional(),
  actionRequiredChannelId: z.lazy(() => SortOrderSchema).optional(),
  welcomeChannelId: z.lazy(() => SortOrderSchema).optional(),
  confessionsChannelId: z.lazy(() => SortOrderSchema).optional(),
  confessionApprovalChannelId: z.lazy(() => SortOrderSchema).optional(),
  hostSessionApprovalChannelId: z.lazy(() => SortOrderSchema).optional(),
  countingChannelId: z.lazy(() => SortOrderSchema).optional(),
  hotmResultsChannelId: z.lazy(() => SortOrderSchema).optional(),
  hotmResultsEmbedId: z.lazy(() => SortOrderSchema).optional(),
  hostSessionChannelId: z.lazy(() => SortOrderSchema).optional(),
  archiveSessionCategoryId: z.lazy(() => SortOrderSchema).optional(),
  modmailCreateChannelId: z.lazy(() => SortOrderSchema).optional(),
  modmailThreadsChannelId: z.lazy(() => SortOrderSchema).optional(),
  modmailLogsChannelId: z.lazy(() => SortOrderSchema).optional(),
  closedDmChannelId: z.lazy(() => SortOrderSchema).optional(),
  banAppealFormLink: z.lazy(() => SortOrderSchema).optional(),
  moderatorRoleId: z.lazy(() => SortOrderSchema).optional(),
  forcedMuteRoleId: z.lazy(() => SortOrderSchema).optional(),
  welcomeChannelMessage: z.lazy(() => SortOrderSchema).optional(),
  welcomeDMMessage: z.lazy(() => SortOrderSchema).optional(),
  groupStudyChannelId: z.lazy(() => SortOrderSchema).optional(),
  keywordRequestChannelId: z.lazy(() => SortOrderSchema).optional(),
  tagResourceApprovalChannelId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => GuildPreferencesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => GuildPreferencesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => GuildPreferencesMinOrderByAggregateInputSchema).optional()
}).strict();

export const GuildPreferencesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.GuildPreferencesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => GuildPreferencesScalarWhereWithAggregatesInputSchema),z.lazy(() => GuildPreferencesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => GuildPreferencesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => GuildPreferencesScalarWhereWithAggregatesInputSchema),z.lazy(() => GuildPreferencesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  guildId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  repEnabled: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  repDisabledChannelIds: z.lazy(() => StringNullableListFilterSchema).optional(),
  hotmSessionOngoing: z.union([ z.lazy(() => BoolNullableWithAggregatesFilterSchema),z.boolean() ]).optional().nullable(),
  modlogChannelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  generalLogsChannelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  actionRequiredChannelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  welcomeChannelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  confessionsChannelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  confessionApprovalChannelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  hostSessionApprovalChannelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  countingChannelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  hotmResultsChannelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  hotmResultsEmbedId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  hostSessionChannelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  archiveSessionCategoryId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  modmailCreateChannelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  modmailThreadsChannelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  modmailLogsChannelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  closedDmChannelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  banAppealFormLink: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  moderatorRoleId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  forcedMuteRoleId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  welcomeChannelMessage: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  welcomeDMMessage: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  groupStudyChannelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  keywordRequestChannelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  tagResourceApprovalChannelId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ReputationWhereInputSchema: z.ZodType<Prisma.ReputationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReputationWhereInputSchema),z.lazy(() => ReputationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReputationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReputationWhereInputSchema),z.lazy(() => ReputationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rep: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  guildId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ReputationOrderByWithRelationInputSchema: z.ZodType<Prisma.ReputationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  rep: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReputationWhereUniqueInputSchema: z.ZodType<Prisma.ReputationWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    guildId_userId: z.lazy(() => ReputationGuildIdUserIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    guildId_userId: z.lazy(() => ReputationGuildIdUserIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  guildId_userId: z.lazy(() => ReputationGuildIdUserIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => ReputationWhereInputSchema),z.lazy(() => ReputationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReputationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReputationWhereInputSchema),z.lazy(() => ReputationWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rep: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  guildId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const ReputationOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReputationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  rep: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ReputationCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ReputationAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReputationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReputationMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ReputationSumOrderByAggregateInputSchema).optional()
}).strict();

export const ReputationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReputationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ReputationScalarWhereWithAggregatesInputSchema),z.lazy(() => ReputationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReputationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReputationScalarWhereWithAggregatesInputSchema),z.lazy(() => ReputationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rep: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  guildId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const HOTMWhereInputSchema: z.ZodType<Prisma.HOTMWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HOTMWhereInputSchema),z.lazy(() => HOTMWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HOTMWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HOTMWhereInputSchema),z.lazy(() => HOTMWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  helperId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  guildId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  votes: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const HOTMOrderByWithRelationInputSchema: z.ZodType<Prisma.HOTMOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  helperId: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  votes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HOTMWhereUniqueInputSchema: z.ZodType<Prisma.HOTMWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    guildId_helperId: z.lazy(() => HOTMGuildIdHelperIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    guildId_helperId: z.lazy(() => HOTMGuildIdHelperIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  guildId_helperId: z.lazy(() => HOTMGuildIdHelperIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => HOTMWhereInputSchema),z.lazy(() => HOTMWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HOTMWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HOTMWhereInputSchema),z.lazy(() => HOTMWhereInputSchema).array() ]).optional(),
  helperId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  guildId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  votes: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
}).strict());

export const HOTMOrderByWithAggregationInputSchema: z.ZodType<Prisma.HOTMOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  helperId: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  votes: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => HOTMCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => HOTMAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => HOTMMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => HOTMMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => HOTMSumOrderByAggregateInputSchema).optional()
}).strict();

export const HOTMScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.HOTMScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => HOTMScalarWhereWithAggregatesInputSchema),z.lazy(() => HOTMScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => HOTMScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HOTMScalarWhereWithAggregatesInputSchema),z.lazy(() => HOTMScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  helperId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  guildId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  votes: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const HOTMBlacklistWhereInputSchema: z.ZodType<Prisma.HOTMBlacklistWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HOTMBlacklistWhereInputSchema),z.lazy(() => HOTMBlacklistWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HOTMBlacklistWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HOTMBlacklistWhereInputSchema),z.lazy(() => HOTMBlacklistWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  helperId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  guildId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  permanent: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
}).strict();

export const HOTMBlacklistOrderByWithRelationInputSchema: z.ZodType<Prisma.HOTMBlacklistOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  helperId: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  permanent: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HOTMBlacklistWhereUniqueInputSchema: z.ZodType<Prisma.HOTMBlacklistWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    guildId_helperId: z.lazy(() => HOTMBlacklistGuildIdHelperIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    guildId_helperId: z.lazy(() => HOTMBlacklistGuildIdHelperIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  guildId_helperId: z.lazy(() => HOTMBlacklistGuildIdHelperIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => HOTMBlacklistWhereInputSchema),z.lazy(() => HOTMBlacklistWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HOTMBlacklistWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HOTMBlacklistWhereInputSchema),z.lazy(() => HOTMBlacklistWhereInputSchema).array() ]).optional(),
  helperId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  guildId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  permanent: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
}).strict());

export const HOTMBlacklistOrderByWithAggregationInputSchema: z.ZodType<Prisma.HOTMBlacklistOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  helperId: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  permanent: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => HOTMBlacklistCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => HOTMBlacklistMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => HOTMBlacklistMinOrderByAggregateInputSchema).optional()
}).strict();

export const HOTMBlacklistScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.HOTMBlacklistScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => HOTMBlacklistScalarWhereWithAggregatesInputSchema),z.lazy(() => HOTMBlacklistScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => HOTMBlacklistScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HOTMBlacklistScalarWhereWithAggregatesInputSchema),z.lazy(() => HOTMBlacklistScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  helperId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  guildId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  permanent: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export const HOTMUserWhereInputSchema: z.ZodType<Prisma.HOTMUserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HOTMUserWhereInputSchema),z.lazy(() => HOTMUserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HOTMUserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HOTMUserWhereInputSchema),z.lazy(() => HOTMUserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  guildId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  voted: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export const HOTMUserOrderByWithRelationInputSchema: z.ZodType<Prisma.HOTMUserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  voted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HOTMUserWhereUniqueInputSchema: z.ZodType<Prisma.HOTMUserWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    guildId_userId: z.lazy(() => HOTMUserGuildIdUserIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    guildId_userId: z.lazy(() => HOTMUserGuildIdUserIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  guildId_userId: z.lazy(() => HOTMUserGuildIdUserIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => HOTMUserWhereInputSchema),z.lazy(() => HOTMUserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HOTMUserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HOTMUserWhereInputSchema),z.lazy(() => HOTMUserWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  guildId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  voted: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict());

export const HOTMUserOrderByWithAggregationInputSchema: z.ZodType<Prisma.HOTMUserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  voted: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => HOTMUserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => HOTMUserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => HOTMUserMinOrderByAggregateInputSchema).optional()
}).strict();

export const HOTMUserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.HOTMUserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => HOTMUserScalarWhereWithAggregatesInputSchema),z.lazy(() => HOTMUserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => HOTMUserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HOTMUserScalarWhereWithAggregatesInputSchema),z.lazy(() => HOTMUserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  guildId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  voted: z.lazy(() => StringNullableListFilterSchema).optional()
}).strict();

export const PunishmentWhereInputSchema: z.ZodType<Prisma.PunishmentWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PunishmentWhereInputSchema),z.lazy(() => PunishmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PunishmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PunishmentWhereInputSchema),z.lazy(() => PunishmentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  actionAgainst: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  actionBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  when: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  guildId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  caseId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  reason: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  points: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  action: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  duration: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const PunishmentOrderByWithRelationInputSchema: z.ZodType<Prisma.PunishmentOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  actionAgainst: z.lazy(() => SortOrderSchema).optional(),
  actionBy: z.lazy(() => SortOrderSchema).optional(),
  when: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  caseId: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  points: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PunishmentWhereUniqueInputSchema: z.ZodType<Prisma.PunishmentWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => PunishmentWhereInputSchema),z.lazy(() => PunishmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PunishmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PunishmentWhereInputSchema),z.lazy(() => PunishmentWhereInputSchema).array() ]).optional(),
  actionAgainst: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  actionBy: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  when: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  guildId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  caseId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  reason: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  points: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  action: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  duration: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
}).strict());

export const PunishmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.PunishmentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  actionAgainst: z.lazy(() => SortOrderSchema).optional(),
  actionBy: z.lazy(() => SortOrderSchema).optional(),
  when: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  caseId: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  points: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PunishmentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PunishmentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PunishmentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PunishmentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PunishmentSumOrderByAggregateInputSchema).optional()
}).strict();

export const PunishmentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PunishmentScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PunishmentScalarWhereWithAggregatesInputSchema),z.lazy(() => PunishmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PunishmentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PunishmentScalarWhereWithAggregatesInputSchema),z.lazy(() => PunishmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  actionAgainst: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  actionBy: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  when: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  guildId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  caseId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  reason: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  points: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  action: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  duration: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const StudyChannelWhereInputSchema: z.ZodType<Prisma.StudyChannelWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StudyChannelWhereInputSchema),z.lazy(() => StudyChannelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudyChannelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudyChannelWhereInputSchema),z.lazy(() => StudyChannelWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  guildId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  channelId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  helperRoleId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  studyPingRoleId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const StudyChannelOrderByWithRelationInputSchema: z.ZodType<Prisma.StudyChannelOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional(),
  helperRoleId: z.lazy(() => SortOrderSchema).optional(),
  studyPingRoleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StudyChannelWhereUniqueInputSchema: z.ZodType<Prisma.StudyChannelWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    channelId: z.string(),
    studyPingRoleId: z.string()
  }),
  z.object({
    id: z.string(),
    channelId: z.string(),
  }),
  z.object({
    id: z.string(),
    studyPingRoleId: z.string(),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    channelId: z.string(),
    studyPingRoleId: z.string(),
  }),
  z.object({
    channelId: z.string(),
  }),
  z.object({
    studyPingRoleId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  channelId: z.string().optional(),
  studyPingRoleId: z.string().optional(),
  AND: z.union([ z.lazy(() => StudyChannelWhereInputSchema),z.lazy(() => StudyChannelWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudyChannelWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudyChannelWhereInputSchema),z.lazy(() => StudyChannelWhereInputSchema).array() ]).optional(),
  guildId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  helperRoleId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const StudyChannelOrderByWithAggregationInputSchema: z.ZodType<Prisma.StudyChannelOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional(),
  helperRoleId: z.lazy(() => SortOrderSchema).optional(),
  studyPingRoleId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => StudyChannelCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => StudyChannelMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => StudyChannelMinOrderByAggregateInputSchema).optional()
}).strict();

export const StudyChannelScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StudyChannelScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => StudyChannelScalarWhereWithAggregatesInputSchema),z.lazy(() => StudyChannelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => StudyChannelScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StudyChannelScalarWhereWithAggregatesInputSchema),z.lazy(() => StudyChannelScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  guildId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  channelId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  helperRoleId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  studyPingRoleId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const GuildPreferencesCreateInputSchema: z.ZodType<Prisma.GuildPreferencesCreateInput> = z.object({
  id: z.string().optional(),
  guildId: z.string(),
  repEnabled: z.boolean().optional(),
  repDisabledChannelIds: z.union([ z.lazy(() => GuildPreferencesCreaterepDisabledChannelIdsInputSchema),z.string().array() ]).optional(),
  hotmSessionOngoing: z.boolean().optional().nullable(),
  modlogChannelId: z.string().optional().nullable(),
  generalLogsChannelId: z.string().optional().nullable(),
  actionRequiredChannelId: z.string().optional().nullable(),
  welcomeChannelId: z.string().optional().nullable(),
  confessionsChannelId: z.string().optional().nullable(),
  confessionApprovalChannelId: z.string().optional().nullable(),
  hostSessionApprovalChannelId: z.string().optional().nullable(),
  countingChannelId: z.string().optional().nullable(),
  hotmResultsChannelId: z.string().optional().nullable(),
  hotmResultsEmbedId: z.string().optional().nullable(),
  hostSessionChannelId: z.string().optional().nullable(),
  archiveSessionCategoryId: z.string().optional().nullable(),
  modmailCreateChannelId: z.string().optional().nullable(),
  modmailThreadsChannelId: z.string().optional().nullable(),
  modmailLogsChannelId: z.string().optional().nullable(),
  closedDmChannelId: z.string().optional().nullable(),
  banAppealFormLink: z.string().optional().nullable(),
  moderatorRoleId: z.string().optional().nullable(),
  forcedMuteRoleId: z.string().optional().nullable(),
  welcomeChannelMessage: z.string().optional().nullable(),
  welcomeDMMessage: z.string().optional().nullable(),
  groupStudyChannelId: z.string().optional().nullable(),
  keywordRequestChannelId: z.string().optional().nullable(),
  tagResourceApprovalChannelId: z.string().optional().nullable()
}).strict();

export const GuildPreferencesUncheckedCreateInputSchema: z.ZodType<Prisma.GuildPreferencesUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  guildId: z.string(),
  repEnabled: z.boolean().optional(),
  repDisabledChannelIds: z.union([ z.lazy(() => GuildPreferencesCreaterepDisabledChannelIdsInputSchema),z.string().array() ]).optional(),
  hotmSessionOngoing: z.boolean().optional().nullable(),
  modlogChannelId: z.string().optional().nullable(),
  generalLogsChannelId: z.string().optional().nullable(),
  actionRequiredChannelId: z.string().optional().nullable(),
  welcomeChannelId: z.string().optional().nullable(),
  confessionsChannelId: z.string().optional().nullable(),
  confessionApprovalChannelId: z.string().optional().nullable(),
  hostSessionApprovalChannelId: z.string().optional().nullable(),
  countingChannelId: z.string().optional().nullable(),
  hotmResultsChannelId: z.string().optional().nullable(),
  hotmResultsEmbedId: z.string().optional().nullable(),
  hostSessionChannelId: z.string().optional().nullable(),
  archiveSessionCategoryId: z.string().optional().nullable(),
  modmailCreateChannelId: z.string().optional().nullable(),
  modmailThreadsChannelId: z.string().optional().nullable(),
  modmailLogsChannelId: z.string().optional().nullable(),
  closedDmChannelId: z.string().optional().nullable(),
  banAppealFormLink: z.string().optional().nullable(),
  moderatorRoleId: z.string().optional().nullable(),
  forcedMuteRoleId: z.string().optional().nullable(),
  welcomeChannelMessage: z.string().optional().nullable(),
  welcomeDMMessage: z.string().optional().nullable(),
  groupStudyChannelId: z.string().optional().nullable(),
  keywordRequestChannelId: z.string().optional().nullable(),
  tagResourceApprovalChannelId: z.string().optional().nullable()
}).strict();

export const GuildPreferencesUpdateInputSchema: z.ZodType<Prisma.GuildPreferencesUpdateInput> = z.object({
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  repEnabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  repDisabledChannelIds: z.union([ z.lazy(() => GuildPreferencesUpdaterepDisabledChannelIdsInputSchema),z.string().array() ]).optional(),
  hotmSessionOngoing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modlogChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  generalLogsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  actionRequiredChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  welcomeChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  confessionsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  confessionApprovalChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hostSessionApprovalChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  countingChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hotmResultsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hotmResultsEmbedId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hostSessionChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  archiveSessionCategoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modmailCreateChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modmailThreadsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modmailLogsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  closedDmChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banAppealFormLink: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  moderatorRoleId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  forcedMuteRoleId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  welcomeChannelMessage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  welcomeDMMessage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  groupStudyChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  keywordRequestChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tagResourceApprovalChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const GuildPreferencesUncheckedUpdateInputSchema: z.ZodType<Prisma.GuildPreferencesUncheckedUpdateInput> = z.object({
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  repEnabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  repDisabledChannelIds: z.union([ z.lazy(() => GuildPreferencesUpdaterepDisabledChannelIdsInputSchema),z.string().array() ]).optional(),
  hotmSessionOngoing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modlogChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  generalLogsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  actionRequiredChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  welcomeChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  confessionsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  confessionApprovalChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hostSessionApprovalChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  countingChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hotmResultsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hotmResultsEmbedId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hostSessionChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  archiveSessionCategoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modmailCreateChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modmailThreadsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modmailLogsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  closedDmChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banAppealFormLink: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  moderatorRoleId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  forcedMuteRoleId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  welcomeChannelMessage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  welcomeDMMessage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  groupStudyChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  keywordRequestChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tagResourceApprovalChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const GuildPreferencesCreateManyInputSchema: z.ZodType<Prisma.GuildPreferencesCreateManyInput> = z.object({
  id: z.string().optional(),
  guildId: z.string(),
  repEnabled: z.boolean().optional(),
  repDisabledChannelIds: z.union([ z.lazy(() => GuildPreferencesCreaterepDisabledChannelIdsInputSchema),z.string().array() ]).optional(),
  hotmSessionOngoing: z.boolean().optional().nullable(),
  modlogChannelId: z.string().optional().nullable(),
  generalLogsChannelId: z.string().optional().nullable(),
  actionRequiredChannelId: z.string().optional().nullable(),
  welcomeChannelId: z.string().optional().nullable(),
  confessionsChannelId: z.string().optional().nullable(),
  confessionApprovalChannelId: z.string().optional().nullable(),
  hostSessionApprovalChannelId: z.string().optional().nullable(),
  countingChannelId: z.string().optional().nullable(),
  hotmResultsChannelId: z.string().optional().nullable(),
  hotmResultsEmbedId: z.string().optional().nullable(),
  hostSessionChannelId: z.string().optional().nullable(),
  archiveSessionCategoryId: z.string().optional().nullable(),
  modmailCreateChannelId: z.string().optional().nullable(),
  modmailThreadsChannelId: z.string().optional().nullable(),
  modmailLogsChannelId: z.string().optional().nullable(),
  closedDmChannelId: z.string().optional().nullable(),
  banAppealFormLink: z.string().optional().nullable(),
  moderatorRoleId: z.string().optional().nullable(),
  forcedMuteRoleId: z.string().optional().nullable(),
  welcomeChannelMessage: z.string().optional().nullable(),
  welcomeDMMessage: z.string().optional().nullable(),
  groupStudyChannelId: z.string().optional().nullable(),
  keywordRequestChannelId: z.string().optional().nullable(),
  tagResourceApprovalChannelId: z.string().optional().nullable()
}).strict();

export const GuildPreferencesUpdateManyMutationInputSchema: z.ZodType<Prisma.GuildPreferencesUpdateManyMutationInput> = z.object({
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  repEnabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  repDisabledChannelIds: z.union([ z.lazy(() => GuildPreferencesUpdaterepDisabledChannelIdsInputSchema),z.string().array() ]).optional(),
  hotmSessionOngoing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modlogChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  generalLogsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  actionRequiredChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  welcomeChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  confessionsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  confessionApprovalChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hostSessionApprovalChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  countingChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hotmResultsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hotmResultsEmbedId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hostSessionChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  archiveSessionCategoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modmailCreateChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modmailThreadsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modmailLogsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  closedDmChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banAppealFormLink: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  moderatorRoleId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  forcedMuteRoleId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  welcomeChannelMessage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  welcomeDMMessage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  groupStudyChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  keywordRequestChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tagResourceApprovalChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const GuildPreferencesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.GuildPreferencesUncheckedUpdateManyInput> = z.object({
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  repEnabled: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  repDisabledChannelIds: z.union([ z.lazy(() => GuildPreferencesUpdaterepDisabledChannelIdsInputSchema),z.string().array() ]).optional(),
  hotmSessionOngoing: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modlogChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  generalLogsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  actionRequiredChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  welcomeChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  confessionsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  confessionApprovalChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hostSessionApprovalChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  countingChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hotmResultsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hotmResultsEmbedId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hostSessionChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  archiveSessionCategoryId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modmailCreateChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modmailThreadsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  modmailLogsChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  closedDmChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  banAppealFormLink: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  moderatorRoleId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  forcedMuteRoleId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  welcomeChannelMessage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  welcomeDMMessage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  groupStudyChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  keywordRequestChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tagResourceApprovalChannelId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ReputationCreateInputSchema: z.ZodType<Prisma.ReputationCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  rep: z.number().int(),
  guildId: z.string()
}).strict();

export const ReputationUncheckedCreateInputSchema: z.ZodType<Prisma.ReputationUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  rep: z.number().int(),
  guildId: z.string()
}).strict();

export const ReputationUpdateInputSchema: z.ZodType<Prisma.ReputationUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rep: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReputationUncheckedUpdateInputSchema: z.ZodType<Prisma.ReputationUncheckedUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rep: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReputationCreateManyInputSchema: z.ZodType<Prisma.ReputationCreateManyInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  rep: z.number().int(),
  guildId: z.string()
}).strict();

export const ReputationUpdateManyMutationInputSchema: z.ZodType<Prisma.ReputationUpdateManyMutationInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rep: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReputationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ReputationUncheckedUpdateManyInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rep: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HOTMCreateInputSchema: z.ZodType<Prisma.HOTMCreateInput> = z.object({
  id: z.string().optional(),
  helperId: z.string(),
  guildId: z.string(),
  votes: z.number().int().optional()
}).strict();

export const HOTMUncheckedCreateInputSchema: z.ZodType<Prisma.HOTMUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  helperId: z.string(),
  guildId: z.string(),
  votes: z.number().int().optional()
}).strict();

export const HOTMUpdateInputSchema: z.ZodType<Prisma.HOTMUpdateInput> = z.object({
  helperId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  votes: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HOTMUncheckedUpdateInputSchema: z.ZodType<Prisma.HOTMUncheckedUpdateInput> = z.object({
  helperId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  votes: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HOTMCreateManyInputSchema: z.ZodType<Prisma.HOTMCreateManyInput> = z.object({
  id: z.string().optional(),
  helperId: z.string(),
  guildId: z.string(),
  votes: z.number().int().optional()
}).strict();

export const HOTMUpdateManyMutationInputSchema: z.ZodType<Prisma.HOTMUpdateManyMutationInput> = z.object({
  helperId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  votes: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HOTMUncheckedUpdateManyInputSchema: z.ZodType<Prisma.HOTMUncheckedUpdateManyInput> = z.object({
  helperId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  votes: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HOTMBlacklistCreateInputSchema: z.ZodType<Prisma.HOTMBlacklistCreateInput> = z.object({
  id: z.string().optional(),
  helperId: z.string(),
  guildId: z.string(),
  permanent: z.boolean().optional()
}).strict();

export const HOTMBlacklistUncheckedCreateInputSchema: z.ZodType<Prisma.HOTMBlacklistUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  helperId: z.string(),
  guildId: z.string(),
  permanent: z.boolean().optional()
}).strict();

export const HOTMBlacklistUpdateInputSchema: z.ZodType<Prisma.HOTMBlacklistUpdateInput> = z.object({
  helperId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  permanent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HOTMBlacklistUncheckedUpdateInputSchema: z.ZodType<Prisma.HOTMBlacklistUncheckedUpdateInput> = z.object({
  helperId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  permanent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HOTMBlacklistCreateManyInputSchema: z.ZodType<Prisma.HOTMBlacklistCreateManyInput> = z.object({
  id: z.string().optional(),
  helperId: z.string(),
  guildId: z.string(),
  permanent: z.boolean().optional()
}).strict();

export const HOTMBlacklistUpdateManyMutationInputSchema: z.ZodType<Prisma.HOTMBlacklistUpdateManyMutationInput> = z.object({
  helperId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  permanent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HOTMBlacklistUncheckedUpdateManyInputSchema: z.ZodType<Prisma.HOTMBlacklistUncheckedUpdateManyInput> = z.object({
  helperId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  permanent: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HOTMUserCreateInputSchema: z.ZodType<Prisma.HOTMUserCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  guildId: z.string(),
  voted: z.union([ z.lazy(() => HOTMUserCreatevotedInputSchema),z.string().array() ]).optional(),
}).strict();

export const HOTMUserUncheckedCreateInputSchema: z.ZodType<Prisma.HOTMUserUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  guildId: z.string(),
  voted: z.union([ z.lazy(() => HOTMUserCreatevotedInputSchema),z.string().array() ]).optional(),
}).strict();

export const HOTMUserUpdateInputSchema: z.ZodType<Prisma.HOTMUserUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  voted: z.union([ z.lazy(() => HOTMUserUpdatevotedInputSchema),z.string().array() ]).optional(),
}).strict();

export const HOTMUserUncheckedUpdateInputSchema: z.ZodType<Prisma.HOTMUserUncheckedUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  voted: z.union([ z.lazy(() => HOTMUserUpdatevotedInputSchema),z.string().array() ]).optional(),
}).strict();

export const HOTMUserCreateManyInputSchema: z.ZodType<Prisma.HOTMUserCreateManyInput> = z.object({
  id: z.string().optional(),
  userId: z.string(),
  guildId: z.string(),
  voted: z.union([ z.lazy(() => HOTMUserCreatevotedInputSchema),z.string().array() ]).optional(),
}).strict();

export const HOTMUserUpdateManyMutationInputSchema: z.ZodType<Prisma.HOTMUserUpdateManyMutationInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  voted: z.union([ z.lazy(() => HOTMUserUpdatevotedInputSchema),z.string().array() ]).optional(),
}).strict();

export const HOTMUserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.HOTMUserUncheckedUpdateManyInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  voted: z.union([ z.lazy(() => HOTMUserUpdatevotedInputSchema),z.string().array() ]).optional(),
}).strict();

export const PunishmentCreateInputSchema: z.ZodType<Prisma.PunishmentCreateInput> = z.object({
  id: z.string().optional(),
  actionAgainst: z.string(),
  actionBy: z.string(),
  when: z.coerce.date(),
  guildId: z.string(),
  caseId: z.number().int(),
  reason: z.string().optional().nullable(),
  points: z.number().int(),
  action: z.string(),
  duration: z.number().int().optional().nullable()
}).strict();

export const PunishmentUncheckedCreateInputSchema: z.ZodType<Prisma.PunishmentUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  actionAgainst: z.string(),
  actionBy: z.string(),
  when: z.coerce.date(),
  guildId: z.string(),
  caseId: z.number().int(),
  reason: z.string().optional().nullable(),
  points: z.number().int(),
  action: z.string(),
  duration: z.number().int().optional().nullable()
}).strict();

export const PunishmentUpdateInputSchema: z.ZodType<Prisma.PunishmentUpdateInput> = z.object({
  actionAgainst: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  actionBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  when: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  caseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  reason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  points: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  action: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PunishmentUncheckedUpdateInputSchema: z.ZodType<Prisma.PunishmentUncheckedUpdateInput> = z.object({
  actionAgainst: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  actionBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  when: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  caseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  reason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  points: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  action: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PunishmentCreateManyInputSchema: z.ZodType<Prisma.PunishmentCreateManyInput> = z.object({
  id: z.string().optional(),
  actionAgainst: z.string(),
  actionBy: z.string(),
  when: z.coerce.date(),
  guildId: z.string(),
  caseId: z.number().int(),
  reason: z.string().optional().nullable(),
  points: z.number().int(),
  action: z.string(),
  duration: z.number().int().optional().nullable()
}).strict();

export const PunishmentUpdateManyMutationInputSchema: z.ZodType<Prisma.PunishmentUpdateManyMutationInput> = z.object({
  actionAgainst: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  actionBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  when: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  caseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  reason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  points: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  action: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PunishmentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PunishmentUncheckedUpdateManyInput> = z.object({
  actionAgainst: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  actionBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  when: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  caseId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  reason: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  points: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  action: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  duration: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const StudyChannelCreateInputSchema: z.ZodType<Prisma.StudyChannelCreateInput> = z.object({
  id: z.string().optional(),
  guildId: z.string(),
  channelId: z.string(),
  helperRoleId: z.string(),
  studyPingRoleId: z.string()
}).strict();

export const StudyChannelUncheckedCreateInputSchema: z.ZodType<Prisma.StudyChannelUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  guildId: z.string(),
  channelId: z.string(),
  helperRoleId: z.string(),
  studyPingRoleId: z.string()
}).strict();

export const StudyChannelUpdateInputSchema: z.ZodType<Prisma.StudyChannelUpdateInput> = z.object({
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  channelId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  helperRoleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  studyPingRoleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StudyChannelUncheckedUpdateInputSchema: z.ZodType<Prisma.StudyChannelUncheckedUpdateInput> = z.object({
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  channelId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  helperRoleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  studyPingRoleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StudyChannelCreateManyInputSchema: z.ZodType<Prisma.StudyChannelCreateManyInput> = z.object({
  id: z.string().optional(),
  guildId: z.string(),
  channelId: z.string(),
  helperRoleId: z.string(),
  studyPingRoleId: z.string()
}).strict();

export const StudyChannelUpdateManyMutationInputSchema: z.ZodType<Prisma.StudyChannelUpdateManyMutationInput> = z.object({
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  channelId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  helperRoleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  studyPingRoleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StudyChannelUncheckedUpdateManyInputSchema: z.ZodType<Prisma.StudyChannelUncheckedUpdateManyInput> = z.object({
  guildId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  channelId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  helperRoleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  studyPingRoleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const StringNullableListFilterSchema: z.ZodType<Prisma.StringNullableListFilter> = z.object({
  equals: z.string().array().optional().nullable(),
  has: z.string().optional().nullable(),
  hasEvery: z.string().array().optional(),
  hasSome: z.string().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export const BoolNullableFilterSchema: z.ZodType<Prisma.BoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const GuildPreferencesCountOrderByAggregateInputSchema: z.ZodType<Prisma.GuildPreferencesCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  repEnabled: z.lazy(() => SortOrderSchema).optional(),
  repDisabledChannelIds: z.lazy(() => SortOrderSchema).optional(),
  hotmSessionOngoing: z.lazy(() => SortOrderSchema).optional(),
  modlogChannelId: z.lazy(() => SortOrderSchema).optional(),
  generalLogsChannelId: z.lazy(() => SortOrderSchema).optional(),
  actionRequiredChannelId: z.lazy(() => SortOrderSchema).optional(),
  welcomeChannelId: z.lazy(() => SortOrderSchema).optional(),
  confessionsChannelId: z.lazy(() => SortOrderSchema).optional(),
  confessionApprovalChannelId: z.lazy(() => SortOrderSchema).optional(),
  hostSessionApprovalChannelId: z.lazy(() => SortOrderSchema).optional(),
  countingChannelId: z.lazy(() => SortOrderSchema).optional(),
  hotmResultsChannelId: z.lazy(() => SortOrderSchema).optional(),
  hotmResultsEmbedId: z.lazy(() => SortOrderSchema).optional(),
  hostSessionChannelId: z.lazy(() => SortOrderSchema).optional(),
  archiveSessionCategoryId: z.lazy(() => SortOrderSchema).optional(),
  modmailCreateChannelId: z.lazy(() => SortOrderSchema).optional(),
  modmailThreadsChannelId: z.lazy(() => SortOrderSchema).optional(),
  modmailLogsChannelId: z.lazy(() => SortOrderSchema).optional(),
  closedDmChannelId: z.lazy(() => SortOrderSchema).optional(),
  banAppealFormLink: z.lazy(() => SortOrderSchema).optional(),
  moderatorRoleId: z.lazy(() => SortOrderSchema).optional(),
  forcedMuteRoleId: z.lazy(() => SortOrderSchema).optional(),
  welcomeChannelMessage: z.lazy(() => SortOrderSchema).optional(),
  welcomeDMMessage: z.lazy(() => SortOrderSchema).optional(),
  groupStudyChannelId: z.lazy(() => SortOrderSchema).optional(),
  keywordRequestChannelId: z.lazy(() => SortOrderSchema).optional(),
  tagResourceApprovalChannelId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GuildPreferencesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.GuildPreferencesMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  repEnabled: z.lazy(() => SortOrderSchema).optional(),
  hotmSessionOngoing: z.lazy(() => SortOrderSchema).optional(),
  modlogChannelId: z.lazy(() => SortOrderSchema).optional(),
  generalLogsChannelId: z.lazy(() => SortOrderSchema).optional(),
  actionRequiredChannelId: z.lazy(() => SortOrderSchema).optional(),
  welcomeChannelId: z.lazy(() => SortOrderSchema).optional(),
  confessionsChannelId: z.lazy(() => SortOrderSchema).optional(),
  confessionApprovalChannelId: z.lazy(() => SortOrderSchema).optional(),
  hostSessionApprovalChannelId: z.lazy(() => SortOrderSchema).optional(),
  countingChannelId: z.lazy(() => SortOrderSchema).optional(),
  hotmResultsChannelId: z.lazy(() => SortOrderSchema).optional(),
  hotmResultsEmbedId: z.lazy(() => SortOrderSchema).optional(),
  hostSessionChannelId: z.lazy(() => SortOrderSchema).optional(),
  archiveSessionCategoryId: z.lazy(() => SortOrderSchema).optional(),
  modmailCreateChannelId: z.lazy(() => SortOrderSchema).optional(),
  modmailThreadsChannelId: z.lazy(() => SortOrderSchema).optional(),
  modmailLogsChannelId: z.lazy(() => SortOrderSchema).optional(),
  closedDmChannelId: z.lazy(() => SortOrderSchema).optional(),
  banAppealFormLink: z.lazy(() => SortOrderSchema).optional(),
  moderatorRoleId: z.lazy(() => SortOrderSchema).optional(),
  forcedMuteRoleId: z.lazy(() => SortOrderSchema).optional(),
  welcomeChannelMessage: z.lazy(() => SortOrderSchema).optional(),
  welcomeDMMessage: z.lazy(() => SortOrderSchema).optional(),
  groupStudyChannelId: z.lazy(() => SortOrderSchema).optional(),
  keywordRequestChannelId: z.lazy(() => SortOrderSchema).optional(),
  tagResourceApprovalChannelId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GuildPreferencesMinOrderByAggregateInputSchema: z.ZodType<Prisma.GuildPreferencesMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  repEnabled: z.lazy(() => SortOrderSchema).optional(),
  hotmSessionOngoing: z.lazy(() => SortOrderSchema).optional(),
  modlogChannelId: z.lazy(() => SortOrderSchema).optional(),
  generalLogsChannelId: z.lazy(() => SortOrderSchema).optional(),
  actionRequiredChannelId: z.lazy(() => SortOrderSchema).optional(),
  welcomeChannelId: z.lazy(() => SortOrderSchema).optional(),
  confessionsChannelId: z.lazy(() => SortOrderSchema).optional(),
  confessionApprovalChannelId: z.lazy(() => SortOrderSchema).optional(),
  hostSessionApprovalChannelId: z.lazy(() => SortOrderSchema).optional(),
  countingChannelId: z.lazy(() => SortOrderSchema).optional(),
  hotmResultsChannelId: z.lazy(() => SortOrderSchema).optional(),
  hotmResultsEmbedId: z.lazy(() => SortOrderSchema).optional(),
  hostSessionChannelId: z.lazy(() => SortOrderSchema).optional(),
  archiveSessionCategoryId: z.lazy(() => SortOrderSchema).optional(),
  modmailCreateChannelId: z.lazy(() => SortOrderSchema).optional(),
  modmailThreadsChannelId: z.lazy(() => SortOrderSchema).optional(),
  modmailLogsChannelId: z.lazy(() => SortOrderSchema).optional(),
  closedDmChannelId: z.lazy(() => SortOrderSchema).optional(),
  banAppealFormLink: z.lazy(() => SortOrderSchema).optional(),
  moderatorRoleId: z.lazy(() => SortOrderSchema).optional(),
  forcedMuteRoleId: z.lazy(() => SortOrderSchema).optional(),
  welcomeChannelMessage: z.lazy(() => SortOrderSchema).optional(),
  welcomeDMMessage: z.lazy(() => SortOrderSchema).optional(),
  groupStudyChannelId: z.lazy(() => SortOrderSchema).optional(),
  keywordRequestChannelId: z.lazy(() => SortOrderSchema).optional(),
  tagResourceApprovalChannelId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const BoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.BoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const ReputationGuildIdUserIdCompoundUniqueInputSchema: z.ZodType<Prisma.ReputationGuildIdUserIdCompoundUniqueInput> = z.object({
  guildId: z.string(),
  userId: z.string()
}).strict();

export const ReputationCountOrderByAggregateInputSchema: z.ZodType<Prisma.ReputationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  rep: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReputationAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ReputationAvgOrderByAggregateInput> = z.object({
  rep: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReputationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ReputationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  rep: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReputationMinOrderByAggregateInputSchema: z.ZodType<Prisma.ReputationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  rep: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReputationSumOrderByAggregateInputSchema: z.ZodType<Prisma.ReputationSumOrderByAggregateInput> = z.object({
  rep: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const HOTMGuildIdHelperIdCompoundUniqueInputSchema: z.ZodType<Prisma.HOTMGuildIdHelperIdCompoundUniqueInput> = z.object({
  guildId: z.string(),
  helperId: z.string()
}).strict();

export const HOTMCountOrderByAggregateInputSchema: z.ZodType<Prisma.HOTMCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  helperId: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  votes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HOTMAvgOrderByAggregateInputSchema: z.ZodType<Prisma.HOTMAvgOrderByAggregateInput> = z.object({
  votes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HOTMMaxOrderByAggregateInputSchema: z.ZodType<Prisma.HOTMMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  helperId: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  votes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HOTMMinOrderByAggregateInputSchema: z.ZodType<Prisma.HOTMMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  helperId: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  votes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HOTMSumOrderByAggregateInputSchema: z.ZodType<Prisma.HOTMSumOrderByAggregateInput> = z.object({
  votes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HOTMBlacklistGuildIdHelperIdCompoundUniqueInputSchema: z.ZodType<Prisma.HOTMBlacklistGuildIdHelperIdCompoundUniqueInput> = z.object({
  guildId: z.string(),
  helperId: z.string()
}).strict();

export const HOTMBlacklistCountOrderByAggregateInputSchema: z.ZodType<Prisma.HOTMBlacklistCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  helperId: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  permanent: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HOTMBlacklistMaxOrderByAggregateInputSchema: z.ZodType<Prisma.HOTMBlacklistMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  helperId: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  permanent: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HOTMBlacklistMinOrderByAggregateInputSchema: z.ZodType<Prisma.HOTMBlacklistMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  helperId: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  permanent: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HOTMUserGuildIdUserIdCompoundUniqueInputSchema: z.ZodType<Prisma.HOTMUserGuildIdUserIdCompoundUniqueInput> = z.object({
  guildId: z.string(),
  userId: z.string()
}).strict();

export const HOTMUserCountOrderByAggregateInputSchema: z.ZodType<Prisma.HOTMUserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  voted: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HOTMUserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.HOTMUserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HOTMUserMinOrderByAggregateInputSchema: z.ZodType<Prisma.HOTMUserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const PunishmentCountOrderByAggregateInputSchema: z.ZodType<Prisma.PunishmentCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  actionAgainst: z.lazy(() => SortOrderSchema).optional(),
  actionBy: z.lazy(() => SortOrderSchema).optional(),
  when: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  caseId: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  points: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PunishmentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PunishmentAvgOrderByAggregateInput> = z.object({
  caseId: z.lazy(() => SortOrderSchema).optional(),
  points: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PunishmentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PunishmentMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  actionAgainst: z.lazy(() => SortOrderSchema).optional(),
  actionBy: z.lazy(() => SortOrderSchema).optional(),
  when: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  caseId: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  points: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PunishmentMinOrderByAggregateInputSchema: z.ZodType<Prisma.PunishmentMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  actionAgainst: z.lazy(() => SortOrderSchema).optional(),
  actionBy: z.lazy(() => SortOrderSchema).optional(),
  when: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  caseId: z.lazy(() => SortOrderSchema).optional(),
  reason: z.lazy(() => SortOrderSchema).optional(),
  points: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PunishmentSumOrderByAggregateInputSchema: z.ZodType<Prisma.PunishmentSumOrderByAggregateInput> = z.object({
  caseId: z.lazy(() => SortOrderSchema).optional(),
  points: z.lazy(() => SortOrderSchema).optional(),
  duration: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const StudyChannelCountOrderByAggregateInputSchema: z.ZodType<Prisma.StudyChannelCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional(),
  helperRoleId: z.lazy(() => SortOrderSchema).optional(),
  studyPingRoleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StudyChannelMaxOrderByAggregateInputSchema: z.ZodType<Prisma.StudyChannelMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional(),
  helperRoleId: z.lazy(() => SortOrderSchema).optional(),
  studyPingRoleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StudyChannelMinOrderByAggregateInputSchema: z.ZodType<Prisma.StudyChannelMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  guildId: z.lazy(() => SortOrderSchema).optional(),
  channelId: z.lazy(() => SortOrderSchema).optional(),
  helperRoleId: z.lazy(() => SortOrderSchema).optional(),
  studyPingRoleId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const GuildPreferencesCreaterepDisabledChannelIdsInputSchema: z.ZodType<Prisma.GuildPreferencesCreaterepDisabledChannelIdsInput> = z.object({
  set: z.string().array()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const GuildPreferencesUpdaterepDisabledChannelIdsInputSchema: z.ZodType<Prisma.GuildPreferencesUpdaterepDisabledChannelIdsInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable(),
  unset: z.boolean().optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const HOTMUserCreatevotedInputSchema: z.ZodType<Prisma.HOTMUserCreatevotedInput> = z.object({
  set: z.string().array()
}).strict();

export const HOTMUserUpdatevotedInputSchema: z.ZodType<Prisma.HOTMUserUpdatevotedInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional(),
  unset: z.boolean().optional()
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedBoolNullableFilterSchema: z.ZodType<Prisma.NestedBoolNullableFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedBoolNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolNullableWithAggregatesFilter> = z.object({
  equals: z.boolean().optional().nullable(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  isSet: z.boolean().optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
  isSet: z.boolean().optional()
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const GuildPreferencesFindFirstArgsSchema: z.ZodType<Prisma.GuildPreferencesFindFirstArgs> = z.object({
  select: GuildPreferencesSelectSchema.optional(),
  where: GuildPreferencesWhereInputSchema.optional(),
  orderBy: z.union([ GuildPreferencesOrderByWithRelationInputSchema.array(),GuildPreferencesOrderByWithRelationInputSchema ]).optional(),
  cursor: GuildPreferencesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GuildPreferencesScalarFieldEnumSchema,GuildPreferencesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GuildPreferencesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.GuildPreferencesFindFirstOrThrowArgs> = z.object({
  select: GuildPreferencesSelectSchema.optional(),
  where: GuildPreferencesWhereInputSchema.optional(),
  orderBy: z.union([ GuildPreferencesOrderByWithRelationInputSchema.array(),GuildPreferencesOrderByWithRelationInputSchema ]).optional(),
  cursor: GuildPreferencesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GuildPreferencesScalarFieldEnumSchema,GuildPreferencesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GuildPreferencesFindManyArgsSchema: z.ZodType<Prisma.GuildPreferencesFindManyArgs> = z.object({
  select: GuildPreferencesSelectSchema.optional(),
  where: GuildPreferencesWhereInputSchema.optional(),
  orderBy: z.union([ GuildPreferencesOrderByWithRelationInputSchema.array(),GuildPreferencesOrderByWithRelationInputSchema ]).optional(),
  cursor: GuildPreferencesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ GuildPreferencesScalarFieldEnumSchema,GuildPreferencesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const GuildPreferencesAggregateArgsSchema: z.ZodType<Prisma.GuildPreferencesAggregateArgs> = z.object({
  where: GuildPreferencesWhereInputSchema.optional(),
  orderBy: z.union([ GuildPreferencesOrderByWithRelationInputSchema.array(),GuildPreferencesOrderByWithRelationInputSchema ]).optional(),
  cursor: GuildPreferencesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GuildPreferencesGroupByArgsSchema: z.ZodType<Prisma.GuildPreferencesGroupByArgs> = z.object({
  where: GuildPreferencesWhereInputSchema.optional(),
  orderBy: z.union([ GuildPreferencesOrderByWithAggregationInputSchema.array(),GuildPreferencesOrderByWithAggregationInputSchema ]).optional(),
  by: GuildPreferencesScalarFieldEnumSchema.array(),
  having: GuildPreferencesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const GuildPreferencesFindUniqueArgsSchema: z.ZodType<Prisma.GuildPreferencesFindUniqueArgs> = z.object({
  select: GuildPreferencesSelectSchema.optional(),
  where: GuildPreferencesWhereUniqueInputSchema,
}).strict() ;

export const GuildPreferencesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.GuildPreferencesFindUniqueOrThrowArgs> = z.object({
  select: GuildPreferencesSelectSchema.optional(),
  where: GuildPreferencesWhereUniqueInputSchema,
}).strict() ;

export const ReputationFindFirstArgsSchema: z.ZodType<Prisma.ReputationFindFirstArgs> = z.object({
  select: ReputationSelectSchema.optional(),
  where: ReputationWhereInputSchema.optional(),
  orderBy: z.union([ ReputationOrderByWithRelationInputSchema.array(),ReputationOrderByWithRelationInputSchema ]).optional(),
  cursor: ReputationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReputationScalarFieldEnumSchema,ReputationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReputationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ReputationFindFirstOrThrowArgs> = z.object({
  select: ReputationSelectSchema.optional(),
  where: ReputationWhereInputSchema.optional(),
  orderBy: z.union([ ReputationOrderByWithRelationInputSchema.array(),ReputationOrderByWithRelationInputSchema ]).optional(),
  cursor: ReputationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReputationScalarFieldEnumSchema,ReputationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReputationFindManyArgsSchema: z.ZodType<Prisma.ReputationFindManyArgs> = z.object({
  select: ReputationSelectSchema.optional(),
  where: ReputationWhereInputSchema.optional(),
  orderBy: z.union([ ReputationOrderByWithRelationInputSchema.array(),ReputationOrderByWithRelationInputSchema ]).optional(),
  cursor: ReputationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReputationScalarFieldEnumSchema,ReputationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReputationAggregateArgsSchema: z.ZodType<Prisma.ReputationAggregateArgs> = z.object({
  where: ReputationWhereInputSchema.optional(),
  orderBy: z.union([ ReputationOrderByWithRelationInputSchema.array(),ReputationOrderByWithRelationInputSchema ]).optional(),
  cursor: ReputationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ReputationGroupByArgsSchema: z.ZodType<Prisma.ReputationGroupByArgs> = z.object({
  where: ReputationWhereInputSchema.optional(),
  orderBy: z.union([ ReputationOrderByWithAggregationInputSchema.array(),ReputationOrderByWithAggregationInputSchema ]).optional(),
  by: ReputationScalarFieldEnumSchema.array(),
  having: ReputationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ReputationFindUniqueArgsSchema: z.ZodType<Prisma.ReputationFindUniqueArgs> = z.object({
  select: ReputationSelectSchema.optional(),
  where: ReputationWhereUniqueInputSchema,
}).strict() ;

export const ReputationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ReputationFindUniqueOrThrowArgs> = z.object({
  select: ReputationSelectSchema.optional(),
  where: ReputationWhereUniqueInputSchema,
}).strict() ;

export const HOTMFindFirstArgsSchema: z.ZodType<Prisma.HOTMFindFirstArgs> = z.object({
  select: HOTMSelectSchema.optional(),
  where: HOTMWhereInputSchema.optional(),
  orderBy: z.union([ HOTMOrderByWithRelationInputSchema.array(),HOTMOrderByWithRelationInputSchema ]).optional(),
  cursor: HOTMWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HOTMScalarFieldEnumSchema,HOTMScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HOTMFindFirstOrThrowArgsSchema: z.ZodType<Prisma.HOTMFindFirstOrThrowArgs> = z.object({
  select: HOTMSelectSchema.optional(),
  where: HOTMWhereInputSchema.optional(),
  orderBy: z.union([ HOTMOrderByWithRelationInputSchema.array(),HOTMOrderByWithRelationInputSchema ]).optional(),
  cursor: HOTMWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HOTMScalarFieldEnumSchema,HOTMScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HOTMFindManyArgsSchema: z.ZodType<Prisma.HOTMFindManyArgs> = z.object({
  select: HOTMSelectSchema.optional(),
  where: HOTMWhereInputSchema.optional(),
  orderBy: z.union([ HOTMOrderByWithRelationInputSchema.array(),HOTMOrderByWithRelationInputSchema ]).optional(),
  cursor: HOTMWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HOTMScalarFieldEnumSchema,HOTMScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HOTMAggregateArgsSchema: z.ZodType<Prisma.HOTMAggregateArgs> = z.object({
  where: HOTMWhereInputSchema.optional(),
  orderBy: z.union([ HOTMOrderByWithRelationInputSchema.array(),HOTMOrderByWithRelationInputSchema ]).optional(),
  cursor: HOTMWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const HOTMGroupByArgsSchema: z.ZodType<Prisma.HOTMGroupByArgs> = z.object({
  where: HOTMWhereInputSchema.optional(),
  orderBy: z.union([ HOTMOrderByWithAggregationInputSchema.array(),HOTMOrderByWithAggregationInputSchema ]).optional(),
  by: HOTMScalarFieldEnumSchema.array(),
  having: HOTMScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const HOTMFindUniqueArgsSchema: z.ZodType<Prisma.HOTMFindUniqueArgs> = z.object({
  select: HOTMSelectSchema.optional(),
  where: HOTMWhereUniqueInputSchema,
}).strict() ;

export const HOTMFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.HOTMFindUniqueOrThrowArgs> = z.object({
  select: HOTMSelectSchema.optional(),
  where: HOTMWhereUniqueInputSchema,
}).strict() ;

export const HOTMBlacklistFindFirstArgsSchema: z.ZodType<Prisma.HOTMBlacklistFindFirstArgs> = z.object({
  select: HOTMBlacklistSelectSchema.optional(),
  where: HOTMBlacklistWhereInputSchema.optional(),
  orderBy: z.union([ HOTMBlacklistOrderByWithRelationInputSchema.array(),HOTMBlacklistOrderByWithRelationInputSchema ]).optional(),
  cursor: HOTMBlacklistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HOTMBlacklistScalarFieldEnumSchema,HOTMBlacklistScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HOTMBlacklistFindFirstOrThrowArgsSchema: z.ZodType<Prisma.HOTMBlacklistFindFirstOrThrowArgs> = z.object({
  select: HOTMBlacklistSelectSchema.optional(),
  where: HOTMBlacklistWhereInputSchema.optional(),
  orderBy: z.union([ HOTMBlacklistOrderByWithRelationInputSchema.array(),HOTMBlacklistOrderByWithRelationInputSchema ]).optional(),
  cursor: HOTMBlacklistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HOTMBlacklistScalarFieldEnumSchema,HOTMBlacklistScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HOTMBlacklistFindManyArgsSchema: z.ZodType<Prisma.HOTMBlacklistFindManyArgs> = z.object({
  select: HOTMBlacklistSelectSchema.optional(),
  where: HOTMBlacklistWhereInputSchema.optional(),
  orderBy: z.union([ HOTMBlacklistOrderByWithRelationInputSchema.array(),HOTMBlacklistOrderByWithRelationInputSchema ]).optional(),
  cursor: HOTMBlacklistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HOTMBlacklistScalarFieldEnumSchema,HOTMBlacklistScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HOTMBlacklistAggregateArgsSchema: z.ZodType<Prisma.HOTMBlacklistAggregateArgs> = z.object({
  where: HOTMBlacklistWhereInputSchema.optional(),
  orderBy: z.union([ HOTMBlacklistOrderByWithRelationInputSchema.array(),HOTMBlacklistOrderByWithRelationInputSchema ]).optional(),
  cursor: HOTMBlacklistWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const HOTMBlacklistGroupByArgsSchema: z.ZodType<Prisma.HOTMBlacklistGroupByArgs> = z.object({
  where: HOTMBlacklistWhereInputSchema.optional(),
  orderBy: z.union([ HOTMBlacklistOrderByWithAggregationInputSchema.array(),HOTMBlacklistOrderByWithAggregationInputSchema ]).optional(),
  by: HOTMBlacklistScalarFieldEnumSchema.array(),
  having: HOTMBlacklistScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const HOTMBlacklistFindUniqueArgsSchema: z.ZodType<Prisma.HOTMBlacklistFindUniqueArgs> = z.object({
  select: HOTMBlacklistSelectSchema.optional(),
  where: HOTMBlacklistWhereUniqueInputSchema,
}).strict() ;

export const HOTMBlacklistFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.HOTMBlacklistFindUniqueOrThrowArgs> = z.object({
  select: HOTMBlacklistSelectSchema.optional(),
  where: HOTMBlacklistWhereUniqueInputSchema,
}).strict() ;

export const HOTMUserFindFirstArgsSchema: z.ZodType<Prisma.HOTMUserFindFirstArgs> = z.object({
  select: HOTMUserSelectSchema.optional(),
  where: HOTMUserWhereInputSchema.optional(),
  orderBy: z.union([ HOTMUserOrderByWithRelationInputSchema.array(),HOTMUserOrderByWithRelationInputSchema ]).optional(),
  cursor: HOTMUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HOTMUserScalarFieldEnumSchema,HOTMUserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HOTMUserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.HOTMUserFindFirstOrThrowArgs> = z.object({
  select: HOTMUserSelectSchema.optional(),
  where: HOTMUserWhereInputSchema.optional(),
  orderBy: z.union([ HOTMUserOrderByWithRelationInputSchema.array(),HOTMUserOrderByWithRelationInputSchema ]).optional(),
  cursor: HOTMUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HOTMUserScalarFieldEnumSchema,HOTMUserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HOTMUserFindManyArgsSchema: z.ZodType<Prisma.HOTMUserFindManyArgs> = z.object({
  select: HOTMUserSelectSchema.optional(),
  where: HOTMUserWhereInputSchema.optional(),
  orderBy: z.union([ HOTMUserOrderByWithRelationInputSchema.array(),HOTMUserOrderByWithRelationInputSchema ]).optional(),
  cursor: HOTMUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HOTMUserScalarFieldEnumSchema,HOTMUserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HOTMUserAggregateArgsSchema: z.ZodType<Prisma.HOTMUserAggregateArgs> = z.object({
  where: HOTMUserWhereInputSchema.optional(),
  orderBy: z.union([ HOTMUserOrderByWithRelationInputSchema.array(),HOTMUserOrderByWithRelationInputSchema ]).optional(),
  cursor: HOTMUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const HOTMUserGroupByArgsSchema: z.ZodType<Prisma.HOTMUserGroupByArgs> = z.object({
  where: HOTMUserWhereInputSchema.optional(),
  orderBy: z.union([ HOTMUserOrderByWithAggregationInputSchema.array(),HOTMUserOrderByWithAggregationInputSchema ]).optional(),
  by: HOTMUserScalarFieldEnumSchema.array(),
  having: HOTMUserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const HOTMUserFindUniqueArgsSchema: z.ZodType<Prisma.HOTMUserFindUniqueArgs> = z.object({
  select: HOTMUserSelectSchema.optional(),
  where: HOTMUserWhereUniqueInputSchema,
}).strict() ;

export const HOTMUserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.HOTMUserFindUniqueOrThrowArgs> = z.object({
  select: HOTMUserSelectSchema.optional(),
  where: HOTMUserWhereUniqueInputSchema,
}).strict() ;

export const PunishmentFindFirstArgsSchema: z.ZodType<Prisma.PunishmentFindFirstArgs> = z.object({
  select: PunishmentSelectSchema.optional(),
  where: PunishmentWhereInputSchema.optional(),
  orderBy: z.union([ PunishmentOrderByWithRelationInputSchema.array(),PunishmentOrderByWithRelationInputSchema ]).optional(),
  cursor: PunishmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PunishmentScalarFieldEnumSchema,PunishmentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PunishmentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PunishmentFindFirstOrThrowArgs> = z.object({
  select: PunishmentSelectSchema.optional(),
  where: PunishmentWhereInputSchema.optional(),
  orderBy: z.union([ PunishmentOrderByWithRelationInputSchema.array(),PunishmentOrderByWithRelationInputSchema ]).optional(),
  cursor: PunishmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PunishmentScalarFieldEnumSchema,PunishmentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PunishmentFindManyArgsSchema: z.ZodType<Prisma.PunishmentFindManyArgs> = z.object({
  select: PunishmentSelectSchema.optional(),
  where: PunishmentWhereInputSchema.optional(),
  orderBy: z.union([ PunishmentOrderByWithRelationInputSchema.array(),PunishmentOrderByWithRelationInputSchema ]).optional(),
  cursor: PunishmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PunishmentScalarFieldEnumSchema,PunishmentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PunishmentAggregateArgsSchema: z.ZodType<Prisma.PunishmentAggregateArgs> = z.object({
  where: PunishmentWhereInputSchema.optional(),
  orderBy: z.union([ PunishmentOrderByWithRelationInputSchema.array(),PunishmentOrderByWithRelationInputSchema ]).optional(),
  cursor: PunishmentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PunishmentGroupByArgsSchema: z.ZodType<Prisma.PunishmentGroupByArgs> = z.object({
  where: PunishmentWhereInputSchema.optional(),
  orderBy: z.union([ PunishmentOrderByWithAggregationInputSchema.array(),PunishmentOrderByWithAggregationInputSchema ]).optional(),
  by: PunishmentScalarFieldEnumSchema.array(),
  having: PunishmentScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PunishmentFindUniqueArgsSchema: z.ZodType<Prisma.PunishmentFindUniqueArgs> = z.object({
  select: PunishmentSelectSchema.optional(),
  where: PunishmentWhereUniqueInputSchema,
}).strict() ;

export const PunishmentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PunishmentFindUniqueOrThrowArgs> = z.object({
  select: PunishmentSelectSchema.optional(),
  where: PunishmentWhereUniqueInputSchema,
}).strict() ;

export const StudyChannelFindFirstArgsSchema: z.ZodType<Prisma.StudyChannelFindFirstArgs> = z.object({
  select: StudyChannelSelectSchema.optional(),
  where: StudyChannelWhereInputSchema.optional(),
  orderBy: z.union([ StudyChannelOrderByWithRelationInputSchema.array(),StudyChannelOrderByWithRelationInputSchema ]).optional(),
  cursor: StudyChannelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StudyChannelScalarFieldEnumSchema,StudyChannelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const StudyChannelFindFirstOrThrowArgsSchema: z.ZodType<Prisma.StudyChannelFindFirstOrThrowArgs> = z.object({
  select: StudyChannelSelectSchema.optional(),
  where: StudyChannelWhereInputSchema.optional(),
  orderBy: z.union([ StudyChannelOrderByWithRelationInputSchema.array(),StudyChannelOrderByWithRelationInputSchema ]).optional(),
  cursor: StudyChannelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StudyChannelScalarFieldEnumSchema,StudyChannelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const StudyChannelFindManyArgsSchema: z.ZodType<Prisma.StudyChannelFindManyArgs> = z.object({
  select: StudyChannelSelectSchema.optional(),
  where: StudyChannelWhereInputSchema.optional(),
  orderBy: z.union([ StudyChannelOrderByWithRelationInputSchema.array(),StudyChannelOrderByWithRelationInputSchema ]).optional(),
  cursor: StudyChannelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ StudyChannelScalarFieldEnumSchema,StudyChannelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const StudyChannelAggregateArgsSchema: z.ZodType<Prisma.StudyChannelAggregateArgs> = z.object({
  where: StudyChannelWhereInputSchema.optional(),
  orderBy: z.union([ StudyChannelOrderByWithRelationInputSchema.array(),StudyChannelOrderByWithRelationInputSchema ]).optional(),
  cursor: StudyChannelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const StudyChannelGroupByArgsSchema: z.ZodType<Prisma.StudyChannelGroupByArgs> = z.object({
  where: StudyChannelWhereInputSchema.optional(),
  orderBy: z.union([ StudyChannelOrderByWithAggregationInputSchema.array(),StudyChannelOrderByWithAggregationInputSchema ]).optional(),
  by: StudyChannelScalarFieldEnumSchema.array(),
  having: StudyChannelScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const StudyChannelFindUniqueArgsSchema: z.ZodType<Prisma.StudyChannelFindUniqueArgs> = z.object({
  select: StudyChannelSelectSchema.optional(),
  where: StudyChannelWhereUniqueInputSchema,
}).strict() ;

export const StudyChannelFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.StudyChannelFindUniqueOrThrowArgs> = z.object({
  select: StudyChannelSelectSchema.optional(),
  where: StudyChannelWhereUniqueInputSchema,
}).strict() ;

export const GuildPreferencesCreateArgsSchema: z.ZodType<Prisma.GuildPreferencesCreateArgs> = z.object({
  select: GuildPreferencesSelectSchema.optional(),
  data: z.union([ GuildPreferencesCreateInputSchema,GuildPreferencesUncheckedCreateInputSchema ]),
}).strict() ;

export const GuildPreferencesUpsertArgsSchema: z.ZodType<Prisma.GuildPreferencesUpsertArgs> = z.object({
  select: GuildPreferencesSelectSchema.optional(),
  where: GuildPreferencesWhereUniqueInputSchema,
  create: z.union([ GuildPreferencesCreateInputSchema,GuildPreferencesUncheckedCreateInputSchema ]),
  update: z.union([ GuildPreferencesUpdateInputSchema,GuildPreferencesUncheckedUpdateInputSchema ]),
}).strict() ;

export const GuildPreferencesCreateManyArgsSchema: z.ZodType<Prisma.GuildPreferencesCreateManyArgs> = z.object({
  data: z.union([ GuildPreferencesCreateManyInputSchema,GuildPreferencesCreateManyInputSchema.array() ]),
}).strict() ;

export const GuildPreferencesDeleteArgsSchema: z.ZodType<Prisma.GuildPreferencesDeleteArgs> = z.object({
  select: GuildPreferencesSelectSchema.optional(),
  where: GuildPreferencesWhereUniqueInputSchema,
}).strict() ;

export const GuildPreferencesUpdateArgsSchema: z.ZodType<Prisma.GuildPreferencesUpdateArgs> = z.object({
  select: GuildPreferencesSelectSchema.optional(),
  data: z.union([ GuildPreferencesUpdateInputSchema,GuildPreferencesUncheckedUpdateInputSchema ]),
  where: GuildPreferencesWhereUniqueInputSchema,
}).strict() ;

export const GuildPreferencesUpdateManyArgsSchema: z.ZodType<Prisma.GuildPreferencesUpdateManyArgs> = z.object({
  data: z.union([ GuildPreferencesUpdateManyMutationInputSchema,GuildPreferencesUncheckedUpdateManyInputSchema ]),
  where: GuildPreferencesWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const GuildPreferencesDeleteManyArgsSchema: z.ZodType<Prisma.GuildPreferencesDeleteManyArgs> = z.object({
  where: GuildPreferencesWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ReputationCreateArgsSchema: z.ZodType<Prisma.ReputationCreateArgs> = z.object({
  select: ReputationSelectSchema.optional(),
  data: z.union([ ReputationCreateInputSchema,ReputationUncheckedCreateInputSchema ]),
}).strict() ;

export const ReputationUpsertArgsSchema: z.ZodType<Prisma.ReputationUpsertArgs> = z.object({
  select: ReputationSelectSchema.optional(),
  where: ReputationWhereUniqueInputSchema,
  create: z.union([ ReputationCreateInputSchema,ReputationUncheckedCreateInputSchema ]),
  update: z.union([ ReputationUpdateInputSchema,ReputationUncheckedUpdateInputSchema ]),
}).strict() ;

export const ReputationCreateManyArgsSchema: z.ZodType<Prisma.ReputationCreateManyArgs> = z.object({
  data: z.union([ ReputationCreateManyInputSchema,ReputationCreateManyInputSchema.array() ]),
}).strict() ;

export const ReputationDeleteArgsSchema: z.ZodType<Prisma.ReputationDeleteArgs> = z.object({
  select: ReputationSelectSchema.optional(),
  where: ReputationWhereUniqueInputSchema,
}).strict() ;

export const ReputationUpdateArgsSchema: z.ZodType<Prisma.ReputationUpdateArgs> = z.object({
  select: ReputationSelectSchema.optional(),
  data: z.union([ ReputationUpdateInputSchema,ReputationUncheckedUpdateInputSchema ]),
  where: ReputationWhereUniqueInputSchema,
}).strict() ;

export const ReputationUpdateManyArgsSchema: z.ZodType<Prisma.ReputationUpdateManyArgs> = z.object({
  data: z.union([ ReputationUpdateManyMutationInputSchema,ReputationUncheckedUpdateManyInputSchema ]),
  where: ReputationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ReputationDeleteManyArgsSchema: z.ZodType<Prisma.ReputationDeleteManyArgs> = z.object({
  where: ReputationWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const HOTMCreateArgsSchema: z.ZodType<Prisma.HOTMCreateArgs> = z.object({
  select: HOTMSelectSchema.optional(),
  data: z.union([ HOTMCreateInputSchema,HOTMUncheckedCreateInputSchema ]),
}).strict() ;

export const HOTMUpsertArgsSchema: z.ZodType<Prisma.HOTMUpsertArgs> = z.object({
  select: HOTMSelectSchema.optional(),
  where: HOTMWhereUniqueInputSchema,
  create: z.union([ HOTMCreateInputSchema,HOTMUncheckedCreateInputSchema ]),
  update: z.union([ HOTMUpdateInputSchema,HOTMUncheckedUpdateInputSchema ]),
}).strict() ;

export const HOTMCreateManyArgsSchema: z.ZodType<Prisma.HOTMCreateManyArgs> = z.object({
  data: z.union([ HOTMCreateManyInputSchema,HOTMCreateManyInputSchema.array() ]),
}).strict() ;

export const HOTMDeleteArgsSchema: z.ZodType<Prisma.HOTMDeleteArgs> = z.object({
  select: HOTMSelectSchema.optional(),
  where: HOTMWhereUniqueInputSchema,
}).strict() ;

export const HOTMUpdateArgsSchema: z.ZodType<Prisma.HOTMUpdateArgs> = z.object({
  select: HOTMSelectSchema.optional(),
  data: z.union([ HOTMUpdateInputSchema,HOTMUncheckedUpdateInputSchema ]),
  where: HOTMWhereUniqueInputSchema,
}).strict() ;

export const HOTMUpdateManyArgsSchema: z.ZodType<Prisma.HOTMUpdateManyArgs> = z.object({
  data: z.union([ HOTMUpdateManyMutationInputSchema,HOTMUncheckedUpdateManyInputSchema ]),
  where: HOTMWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const HOTMDeleteManyArgsSchema: z.ZodType<Prisma.HOTMDeleteManyArgs> = z.object({
  where: HOTMWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const HOTMBlacklistCreateArgsSchema: z.ZodType<Prisma.HOTMBlacklistCreateArgs> = z.object({
  select: HOTMBlacklistSelectSchema.optional(),
  data: z.union([ HOTMBlacklistCreateInputSchema,HOTMBlacklistUncheckedCreateInputSchema ]),
}).strict() ;

export const HOTMBlacklistUpsertArgsSchema: z.ZodType<Prisma.HOTMBlacklistUpsertArgs> = z.object({
  select: HOTMBlacklistSelectSchema.optional(),
  where: HOTMBlacklistWhereUniqueInputSchema,
  create: z.union([ HOTMBlacklistCreateInputSchema,HOTMBlacklistUncheckedCreateInputSchema ]),
  update: z.union([ HOTMBlacklistUpdateInputSchema,HOTMBlacklistUncheckedUpdateInputSchema ]),
}).strict() ;

export const HOTMBlacklistCreateManyArgsSchema: z.ZodType<Prisma.HOTMBlacklistCreateManyArgs> = z.object({
  data: z.union([ HOTMBlacklistCreateManyInputSchema,HOTMBlacklistCreateManyInputSchema.array() ]),
}).strict() ;

export const HOTMBlacklistDeleteArgsSchema: z.ZodType<Prisma.HOTMBlacklistDeleteArgs> = z.object({
  select: HOTMBlacklistSelectSchema.optional(),
  where: HOTMBlacklistWhereUniqueInputSchema,
}).strict() ;

export const HOTMBlacklistUpdateArgsSchema: z.ZodType<Prisma.HOTMBlacklistUpdateArgs> = z.object({
  select: HOTMBlacklistSelectSchema.optional(),
  data: z.union([ HOTMBlacklistUpdateInputSchema,HOTMBlacklistUncheckedUpdateInputSchema ]),
  where: HOTMBlacklistWhereUniqueInputSchema,
}).strict() ;

export const HOTMBlacklistUpdateManyArgsSchema: z.ZodType<Prisma.HOTMBlacklistUpdateManyArgs> = z.object({
  data: z.union([ HOTMBlacklistUpdateManyMutationInputSchema,HOTMBlacklistUncheckedUpdateManyInputSchema ]),
  where: HOTMBlacklistWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const HOTMBlacklistDeleteManyArgsSchema: z.ZodType<Prisma.HOTMBlacklistDeleteManyArgs> = z.object({
  where: HOTMBlacklistWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const HOTMUserCreateArgsSchema: z.ZodType<Prisma.HOTMUserCreateArgs> = z.object({
  select: HOTMUserSelectSchema.optional(),
  data: z.union([ HOTMUserCreateInputSchema,HOTMUserUncheckedCreateInputSchema ]),
}).strict() ;

export const HOTMUserUpsertArgsSchema: z.ZodType<Prisma.HOTMUserUpsertArgs> = z.object({
  select: HOTMUserSelectSchema.optional(),
  where: HOTMUserWhereUniqueInputSchema,
  create: z.union([ HOTMUserCreateInputSchema,HOTMUserUncheckedCreateInputSchema ]),
  update: z.union([ HOTMUserUpdateInputSchema,HOTMUserUncheckedUpdateInputSchema ]),
}).strict() ;

export const HOTMUserCreateManyArgsSchema: z.ZodType<Prisma.HOTMUserCreateManyArgs> = z.object({
  data: z.union([ HOTMUserCreateManyInputSchema,HOTMUserCreateManyInputSchema.array() ]),
}).strict() ;

export const HOTMUserDeleteArgsSchema: z.ZodType<Prisma.HOTMUserDeleteArgs> = z.object({
  select: HOTMUserSelectSchema.optional(),
  where: HOTMUserWhereUniqueInputSchema,
}).strict() ;

export const HOTMUserUpdateArgsSchema: z.ZodType<Prisma.HOTMUserUpdateArgs> = z.object({
  select: HOTMUserSelectSchema.optional(),
  data: z.union([ HOTMUserUpdateInputSchema,HOTMUserUncheckedUpdateInputSchema ]),
  where: HOTMUserWhereUniqueInputSchema,
}).strict() ;

export const HOTMUserUpdateManyArgsSchema: z.ZodType<Prisma.HOTMUserUpdateManyArgs> = z.object({
  data: z.union([ HOTMUserUpdateManyMutationInputSchema,HOTMUserUncheckedUpdateManyInputSchema ]),
  where: HOTMUserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const HOTMUserDeleteManyArgsSchema: z.ZodType<Prisma.HOTMUserDeleteManyArgs> = z.object({
  where: HOTMUserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const PunishmentCreateArgsSchema: z.ZodType<Prisma.PunishmentCreateArgs> = z.object({
  select: PunishmentSelectSchema.optional(),
  data: z.union([ PunishmentCreateInputSchema,PunishmentUncheckedCreateInputSchema ]),
}).strict() ;

export const PunishmentUpsertArgsSchema: z.ZodType<Prisma.PunishmentUpsertArgs> = z.object({
  select: PunishmentSelectSchema.optional(),
  where: PunishmentWhereUniqueInputSchema,
  create: z.union([ PunishmentCreateInputSchema,PunishmentUncheckedCreateInputSchema ]),
  update: z.union([ PunishmentUpdateInputSchema,PunishmentUncheckedUpdateInputSchema ]),
}).strict() ;

export const PunishmentCreateManyArgsSchema: z.ZodType<Prisma.PunishmentCreateManyArgs> = z.object({
  data: z.union([ PunishmentCreateManyInputSchema,PunishmentCreateManyInputSchema.array() ]),
}).strict() ;

export const PunishmentDeleteArgsSchema: z.ZodType<Prisma.PunishmentDeleteArgs> = z.object({
  select: PunishmentSelectSchema.optional(),
  where: PunishmentWhereUniqueInputSchema,
}).strict() ;

export const PunishmentUpdateArgsSchema: z.ZodType<Prisma.PunishmentUpdateArgs> = z.object({
  select: PunishmentSelectSchema.optional(),
  data: z.union([ PunishmentUpdateInputSchema,PunishmentUncheckedUpdateInputSchema ]),
  where: PunishmentWhereUniqueInputSchema,
}).strict() ;

export const PunishmentUpdateManyArgsSchema: z.ZodType<Prisma.PunishmentUpdateManyArgs> = z.object({
  data: z.union([ PunishmentUpdateManyMutationInputSchema,PunishmentUncheckedUpdateManyInputSchema ]),
  where: PunishmentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const PunishmentDeleteManyArgsSchema: z.ZodType<Prisma.PunishmentDeleteManyArgs> = z.object({
  where: PunishmentWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const StudyChannelCreateArgsSchema: z.ZodType<Prisma.StudyChannelCreateArgs> = z.object({
  select: StudyChannelSelectSchema.optional(),
  data: z.union([ StudyChannelCreateInputSchema,StudyChannelUncheckedCreateInputSchema ]),
}).strict() ;

export const StudyChannelUpsertArgsSchema: z.ZodType<Prisma.StudyChannelUpsertArgs> = z.object({
  select: StudyChannelSelectSchema.optional(),
  where: StudyChannelWhereUniqueInputSchema,
  create: z.union([ StudyChannelCreateInputSchema,StudyChannelUncheckedCreateInputSchema ]),
  update: z.union([ StudyChannelUpdateInputSchema,StudyChannelUncheckedUpdateInputSchema ]),
}).strict() ;

export const StudyChannelCreateManyArgsSchema: z.ZodType<Prisma.StudyChannelCreateManyArgs> = z.object({
  data: z.union([ StudyChannelCreateManyInputSchema,StudyChannelCreateManyInputSchema.array() ]),
}).strict() ;

export const StudyChannelDeleteArgsSchema: z.ZodType<Prisma.StudyChannelDeleteArgs> = z.object({
  select: StudyChannelSelectSchema.optional(),
  where: StudyChannelWhereUniqueInputSchema,
}).strict() ;

export const StudyChannelUpdateArgsSchema: z.ZodType<Prisma.StudyChannelUpdateArgs> = z.object({
  select: StudyChannelSelectSchema.optional(),
  data: z.union([ StudyChannelUpdateInputSchema,StudyChannelUncheckedUpdateInputSchema ]),
  where: StudyChannelWhereUniqueInputSchema,
}).strict() ;

export const StudyChannelUpdateManyArgsSchema: z.ZodType<Prisma.StudyChannelUpdateManyArgs> = z.object({
  data: z.union([ StudyChannelUpdateManyMutationInputSchema,StudyChannelUncheckedUpdateManyInputSchema ]),
  where: StudyChannelWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const StudyChannelDeleteManyArgsSchema: z.ZodType<Prisma.StudyChannelDeleteManyArgs> = z.object({
  where: StudyChannelWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;