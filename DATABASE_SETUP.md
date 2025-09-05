# Database Setup Required

To enable image uploads in the Community tab, you need to run these SQL commands in your Supabase SQL Editor:

## 1. Add image_url column to community_posts table

```sql
ALTER TABLE community_posts ADD COLUMN image_url TEXT;
```

## 2. Create storage bucket and policies

```sql
-- Create community-images storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('community-images', 'community-images', true)
ON CONFLICT (id) DO NOTHING;

-- Allow authenticated users to upload images
CREATE POLICY "Allow authenticated users to upload images" ON storage.objects
FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'community-images');

-- Allow public access to view images
CREATE POLICY "Allow public access to community images" ON storage.objects
FOR SELECT TO public
USING (bucket_id = 'community-images');

-- Allow users to delete their own images
CREATE POLICY "Allow users to delete their own images" ON storage.objects
FOR DELETE TO authenticated
USING (bucket_id = 'community-images' AND auth.uid()::text = (storage.foldername(name))[1]);
```

## Steps to apply:
1. Go to your Supabase Dashboard
2. Click on "SQL Editor" in the left sidebar
3. Create a new query
4. Copy and paste the SQL commands above
5. Click "Run" to execute

After running these commands, the image upload functionality will work completely!