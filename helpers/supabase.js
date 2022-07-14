const { createClient } = require('@supabase/supabase-js');

// const supabase = createClient('https://jfnsovfevnpvauwomrmf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmbnNvdmZldm5wdmF1d29tcm1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc2NjM4NDYsImV4cCI6MTk3MzIzOTg0Nn0.ifL6OdqcKhhq-PxppQenzYFGDIM_CgIoGni7K1ppaLI');
const supabase = createClient('https://jfnsovfevnpvauwomrmf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmbnNvdmZldm5wdmF1d29tcm1mIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NzY2Mzg0NiwiZXhwIjoxOTczMjM5ODQ2fQ.O0plzzhlBsaQQB64JJkNr5EHW62u2ZgV4saDNXIyD9I');

module.exports = supabase;