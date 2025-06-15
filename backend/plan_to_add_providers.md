plan to add providers:
when I click on watch button
1. hit: https://api.themoviedb.org/3/movie/12445?append_to_response=external_ids,credits,release_dates&language=en-US
2. get imdb id from response
3. hit: curl -H "Origin: https://pstream.org" https://fed-api-europe.pstream.org/cache/imdb_id
4. get response
5. print response on console.