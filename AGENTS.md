<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Render page wallpapers through PageWallpaper inside an isolated page root, outside animated content; this keeps fixed images visible and viewport-anchored on mobile and desktop.
- Apply shared page scroll enhancements from the root layout without adding layout wrappers; keep homepage's explicit ScrollReveal components and avoid animating fixed-layer ancestors.
