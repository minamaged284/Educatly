export interface PostInterface {
    type_of:                  TypeOf;
    id:                       number;
    title:                    string;
    description:              string;
    readable_publish_date:    string;
    slug:                     string;
    path:                     string;
    url:                      string;
    comments_count:           number;
    public_reactions_count:   number;
    collection_id:            number | null;
    published_timestamp:      Date;
    positive_reactions_count: number;
    cover_image:              null | string;
    social_image:             string;
    canonical_url:            string;
    created_at:               string;
    edited_at:                Date | null;
    crossposted_at:           null;
    published_at:             string;
    last_comment_at:          Date;
    reading_time_minutes:     number;
    tag_list:                 string[];
    tags:                     string;
    user:                     User;
    organization?:            Organization;
    flare_tag?:               FlareTag;
}

export interface FlareTag {
    name:           FlareTagName;
    bg_color_hex:   BgColorHex;
    text_color_hex: TextColorHex;
}

export enum BgColorHex {
    D0Ecff = "#D0ECFF",
    The71Ea8B = "#71EA8B",
}

export enum FlareTagName {
    Discuss = "discuss",
    Watercooler = "watercooler",
}

export enum TextColorHex {
    Ffffff = "#FFFFFF",
    The130074 = "#130074",
}

export interface Organization {
    name:             OrganizationName;
    username:         Slug;
    slug:             Slug;
    profile_image:    string;
    profile_image_90: string;
}

export enum OrganizationName {
    CodeNewbie = "CodeNewbie",
    Feministech = "Feministech",
    TheDEVTeam = "The DEV Team",
}

export enum Slug {
    Codenewbieteam = "codenewbieteam",
    Devteam = "devteam",
    Feministech = "feministech",
}

export enum TypeOf {
    Article = "article",
}

export interface User {
    name:             string;
    username:         string;
    twitter_username: null | string;
    github_username:  null | string;
    user_id:          number;
    website_url:      null | string;
    profile_image:    string;
    profile_image_90: string;
}
