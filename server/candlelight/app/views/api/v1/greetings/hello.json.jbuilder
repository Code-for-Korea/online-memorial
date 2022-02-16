json.signs @signs do |sign|
  if sign.any?
    json.name sign['signer_name']
    json.message sign['body']
    json.signed_at sign['signed_at']
    json.no sign['sequence_no']
  end
end