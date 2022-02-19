import Bookmark from "../models/bookmarks/Bookmark";

/**
 * @file Declares API for Bookmarks related data access object methods
 */
export default interface BookmarkI {
    findAllUsersThatBookmarkedTuit (tid: string): Promise<Bookmark[]>;
    findAllTuitsBookmarkedByUser (uid: string): Promise<Bookmark[]>;
    userBookmarksTuit (tid: string, uid: string): Promise<Bookmark>;
    userUnbookmarksTuit (tid: string, uid: string): Promise<any>;
    userUnbookmarksAllTuit (uid: string): Promise<any>;
};