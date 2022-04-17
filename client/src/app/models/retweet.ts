export interface retweet {
    screen_name: string,
    user_id: string,
    range_max: number,
    range_min: number,
    count_max: number,
    status: number,//待機(0) 実行(1) 最大制限(2) エラー(3)
    mode: number, //リツイート(0) キーワードRT(1) required keyword
    retweeted_timeline: number, // 0=>the first one 1=>second
    keyword: string,
}