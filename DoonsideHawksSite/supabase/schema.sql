-- Supabase Schema Initialization for Doonside Hawks Admin Dashboard

-- 1. Honourboard Junior Table
CREATE TABLE public.honourboard_junior (
    id SERIAL PRIMARY KEY,
    year TEXT NOT NULL,
    team TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('Golden', 'Silver')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Honourboard Senior Table
CREATE TABLE public.honourboard_senior (
    id SERIAL PRIMARY KEY,
    year TEXT NOT NULL,
    team TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('Golden', 'Silver')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Gallery Items Table
CREATE TABLE public.gallery_items (
    id SERIAL PRIMARY KEY,
    type TEXT NOT NULL CHECK (type IN ('image', 'video')),
    src TEXT NOT NULL,
    alt TEXT,
    title TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Life Members Table
CREATE TABLE public.life_members (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    year TEXT,
    type TEXT CHECK (type IN ('S', '15', '')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Social Wall Table
CREATE TABLE public.social_wall (
    id SERIAL PRIMARY KEY,
    platform TEXT NOT NULL CHECK (platform IN ('Facebook', 'Instagram', 'YouTube')),
    author TEXT NOT NULL,
    timestamp_text TEXT NOT NULL,
    text_content TEXT,
    media_url TEXT,
    post_url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. Home Sponsors Table
CREATE TABLE public.home_sponsors (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image_url TEXT NOT NULL,
    link_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Row Level Security (RLS) Setup
-- Enable RLS on all tables
ALTER TABLE public.honourboard_junior ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.honourboard_senior ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.life_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.home_sponsors ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public reads (SELECT) for everyone
CREATE POLICY "Allow public read access" ON public.honourboard_junior FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.honourboard_senior FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.gallery_items FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.life_members FOR SELECT USING (true);
CREATE POLICY "Allow public read access" ON public.home_sponsors FOR SELECT USING (true);

-- Create policy to allow full access for authenticated users (admins)
CREATE POLICY "Allow admin full access" ON public.honourboard_junior FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin full access" ON public.honourboard_senior FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin full access" ON public.gallery_items FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin full access" ON public.life_members FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin full access" ON public.home_sponsors FOR ALL USING (auth.role() = 'authenticated');

-- Storage Row Level Security (RLS) Setup for `gallery-images`
-- We need to insert the bucket if it doesn't exist, though it's easier to create in UI.
-- The policies below assume a bucket named 'gallery-images' exists.

-- 1. Create a policy to allow public READ access for everyone
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'gallery-images');

-- 2. Create a policy to allow Authenticated users (Admins) to INSERT
CREATE POLICY "Admin Upload Access"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'gallery-images');

-- 3. Create a policy to allow Authenticated users to UPDATE/DELETE
CREATE POLICY "Admin Delete Access"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'gallery-images');

CREATE POLICY "Admin Update Access"
ON storage.objects FOR UPDATE
TO authenticated

-- Storage Row Level Security (RLS) Setup for `sponsor-logos`
CREATE POLICY "Public Sponsor Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'sponsor-logos');

CREATE POLICY "Admin Sponsor Upload Access"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'sponsor-logos');

CREATE POLICY "Admin Sponsor Delete Access"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'sponsor-logos');

CREATE POLICY "Admin Sponsor Update Access"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'sponsor-logos');
