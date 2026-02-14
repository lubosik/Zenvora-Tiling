/**
 * Web3Forms integration — all form submissions go to zenvoratiling@outlook.com
 * Configure the destination email in your Web3Forms dashboard for this access key.
 */
export const WEB3FORMS_ACCESS_KEY = 'bca99242-eac5-4b08-884e-08459bdb7354'
export const CONTACT_EMAIL = 'zenvoratiling@outlook.com'

export async function submitToWeb3Forms(payload: Record<string, unknown>): Promise<{ success: boolean; message?: string }> {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...payload }),
  })
  const data = await res.json().catch(() => ({}))
  if (res.ok && data.success) return { success: true }
  return { success: false, message: data.message || 'Submission failed' }
}
