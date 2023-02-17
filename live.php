<?php
// Set the URL for the API endpoint
$url = "https://outlets.goldline.co.uk/outlets/GetSpringFountPricesXML.asp?Key=foUntAinS!71x";

// Use cURL to retrieve the XML response
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$xml = curl_exec($ch);
curl_close($ch);

// Load the XML response into a SimpleXMLElement object
$xmlObj = new SimpleXMLElement($xml);

// Get the USD gold bid and ask prices from the XML
$bid = (string) $xmlObj->LivePrices->USD->Au->Bid;
$ask = (string) $xmlObj->LivePrices->USD->Au->Ask;

// Build a JSON object with the gold bid and ask prices
$jsonObj = json_encode(array("bid" => $bid, "ask" => $ask));

// Set the content type header to JSON
header('Content-Type: application/json');

// Output the JSON object
echo $jsonObj;
?>
