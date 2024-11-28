export function formatPhoneNumber(phoneNumber: string) {
  return phoneNumber
    .slice(0, 13)
    .replace(/[^0-9]/g, "")
    .replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})/, "$1-$2-$3")
    .replace("--", "-");
}
