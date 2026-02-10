import { useEffect, useRef, useState } from 'react'

function SearchBox() {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div style={{ 
      maxWidth: '600px', 
      margin: '40px auto', 
      padding: '24px',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <form 
        onSubmit={(e) => e.preventDefault()} 
        style={{ 
          display: 'flex', 
          width: '100%',
          marginBottom: 32 
        }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Type to search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ 
            flex: 1,
            padding: '12px 16px', 
            fontSize: '16px',
            border: '1px solid #444',
            borderRight: 'none',
            borderRadius: '8px 0 0 8px',
            backgroundColor: '#1a1a1a',
            color: 'white',
            outline: 'none',
            transition: 'border-color 0.3s ease'
          }}
        />
        <button 
          type="submit" 
          style={{ 
            padding: '0 24px',
            fontSize: '16px',
            fontWeight: '600',
            backgroundColor: '#646cff',
            color: 'white',
            border: '1px solid #646cff',
            borderRadius: '0 8px 8px 0',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#535bf2')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#646cff')}
        >
          Submit
        </button>
      </form>

      <h2 style={{ fontSize: '24px', fontWeight: '500', marginBottom: '16px', color: '#888' }}>
        Search results:
      </h2>
      <div style={{ 
        padding: '20px', 
        borderRadius: '8px', 
        backgroundColor: 'rgba(255,255,255,0.03)',
        border: '1px dashed #444'
      }}>
        {query ? (
          <p>Showing results for: <strong style={{ color: '#646cff' }}>{query}</strong></p>
        ) : (
          <p style={{ fontStyle: 'italic', color: '#666' }}>No query entered yet.</p>
        )}
      </div>
    </div>
  )
}

export default SearchBox
