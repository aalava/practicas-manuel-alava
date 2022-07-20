<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'api.spotify.com/v1/browse/new-releases?country=EC&limit=4',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'Authorization: Bearer BQC1DJy51Ztf7rhv_kRyVPMGQ7oOdqxVWL69KcCxK_4bRpAOXzkRUNn_yxZft6CK0hDOpx2-VATRS8a6Q-5tSGI88SfS4Fr1vMntk0qJtJC-bZa39xvxFRHfP7ep1UFk9XLjLCivMW1CQhYOSQr1v8pB_qihF4ZSdfLyfPNUD_JXa0LisOTnwjWwfzhZ8ycGCxgYk3yAiV8iO-VLRGD5HFQy536vgw'
  ),
));

$response = curl_exec($curl);

curl_close($curl);

echo $response;

$test = json_decode($response, true);

foreach ($test as $test1) {
    echo '<pre>';
    print_r($test1);
    echo '</pre>';
}

for ($i = 0; $i < $test1['limit']; $i++){
	echo $test1['items'][$i]['artists'][0]['name'];
	echo '<br>';
}
